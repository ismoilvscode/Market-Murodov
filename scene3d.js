/* =========================================================
   SCENE3D.JS
   ---------------------------------------------------------
   Adds the "full 3D" layer on top of app.js without touching
   its logic: a continuous, looping three.js scene behind the
   hero and about sections, plus a lightweight pointer-tilt
   effect applied to cards across the site.

   Safe by design:
   - Does nothing if three.js failed to load (e.g. offline).
   - Does nothing if the visitor has prefers-reduced-motion on.
   - Purely additive — never reads/writes app.js state.
========================================================= */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || typeof THREE === 'undefined') return;

  /* =======================================================
     SHARED: one continuously-running render loop for every
     mounted scene, so all animations stay in lockstep and
     there's a single requestAnimationFrame driving the page.
  ======================================================= */
  const scenes = [];
  function tick(time) {
    scenes.forEach((s) => s.update(time));
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function mountScene(containerId, opts) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = opts.cameraZ;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Wireframe shapes drifting and rotating forever.
    const group = new THREE.Group();
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.TorusGeometry(0.7, 0.24, 8, 24),
      new THREE.OctahedronGeometry(0.9, 0),
    ];
    const meshes = [];
    for (let i = 0; i < opts.shapeCount; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: opts.colors[i % opts.colors.length],
        wireframe: true,
        transparent: true,
        opacity: opts.opacity,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const edgeBias = (v) => (Math.random() < 0.5 ? -1 : 1) * (0.35 + Math.random() * 0.65) * v;
      mesh.position.set(
        opts.avoidCenter ? edgeBias(opts.spread / 2) : (Math.random() - 0.5) * opts.spread,
        (Math.random() - 0.5) * opts.spread * 0.6,
        (Math.random() - 0.5) * opts.spread * 0.5
      );
      const scale = opts.minScale + Math.random() * (opts.maxScale - opts.minScale);
      mesh.scale.setScalar(scale);
      mesh.userData.spin = {
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.006,
      };
      mesh.userData.floatOffset = Math.random() * Math.PI * 2;
      mesh.userData.baseY = mesh.position.y;
      group.add(mesh);
      meshes.push(mesh);
    }
    scene.add(group);

    // Sparse particle field for depth.
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = opts.particleCount;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * opts.spread * 1.6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * opts.spread * 1.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * opts.spread;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: opts.particleColor,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let targetX = 0;
    let targetY = 0;
    function onPointerMove(e) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = nx * opts.parallax;
      targetY = ny * opts.parallax;
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    function resize() {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    scenes.push({
      update(time) {
        const t = time * 0.001;
        meshes.forEach((mesh) => {
          mesh.rotation.x += mesh.userData.spin.x;
          mesh.rotation.y += mesh.userData.spin.y;
          mesh.position.y = mesh.userData.baseY + Math.sin(t * 0.6 + mesh.userData.floatOffset) * 0.25;
        });
        particles.rotation.y = t * 0.02;
        group.rotation.y += (targetX * 0.4 - group.rotation.y) * 0.02;
        camera.position.x += (targetX - camera.position.x) * 0.03;
        camera.position.y += (-targetY - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      },
    });
  }

  mountScene('heroScene', {
    cameraZ: 5,
    shapeCount: 6,
    spread: 5.5,
    minScale: 0.45,
    maxScale: 1.0,
    opacity: 0.4,
    colors: [0x5b8def, 0xf2a93b, 0x4fbf7f],
    particleCount: 160,
    particleColor: 0x5b8def,
    parallax: 0.6,
    avoidCenter: true,
  });

  mountScene('aboutScene', {
    cameraZ: 6,
    shapeCount: 5,
    spread: 6,
    minScale: 0.4,
    maxScale: 0.9,
    opacity: 0.3,
    colors: [0x5b8def, 0xef6a5b],
    particleCount: 120,
    particleColor: 0xffffff,
    parallax: 0.4,
  });

  /* =======================================================
     TILT — subtle continuous 3D response to the pointer,
     applied to any card-like element across the site.
  ======================================================= */
  const TILT_SELECTOR = '.tilt-card, .card, .console-card, .btn-hero';
  const TILT_MAX_DEG = 6;

  function attachTilt(el) {
    if (el.dataset.tiltBound) return;
    el.dataset.tiltBound = '1';
    el.style.transformStyle = 'preserve-3d';

    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = (-py * TILT_MAX_DEG).toFixed(2);
      const ry = (px * TILT_MAX_DEG).toFixed(2);
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  }

  function bindTiltToAll() {
    document.querySelectorAll(TILT_SELECTOR).forEach(attachTilt);
  }
  bindTiltToAll();

  // The storefront/manage lists are re-rendered dynamically by
  // app.js (Firestore snapshots), so keep watching for new cards
  // instead of binding once at load.
  const observer = new MutationObserver(bindTiltToAll);
  observer.observe(document.body, { childList: true, subtree: true });
})();