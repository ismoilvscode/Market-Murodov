(function () {
  'use strict';

  /* =========================================================
     TRANSLATIONS
  ========================================================= */
  const I18N = {
    en: {
      'nav.adminBadge': 'Admin mode',
      'nav.backToStore': '← Back to storefront',
      'login.title': 'Admin sign-in',
      'login.hint': 'Enter your admin credentials to continue.',
      'login.username': 'Username',
      'login.password': 'Password',
      'login.submit': 'Sign in',
      'login.error': 'Incorrect username or password.',
      'login.logout': 'Log out',
      'hero.eyebrow': '01001101 — template exchange',
      'hero.title1': 'Ship a website',
      'hero.title2': 'before your coffee cools.',
      'hero.subtitle': 'Browse ready-made templates below. Preview any of them live, then reach the seller on WhatsApp or Telegram in one tap.',
      'admin.heading': 'Admin Console',
      'admin.subheading': "Publish new templates and manage your storefront contact links.",
      'admin.contact.title': 'Store Contact',
      'admin.contact.hint': 'Used by every "WhatsApp" and "Telegram" button on your storefront.',
      'admin.contact.whatsapp': 'WhatsApp number (with country code)',
      'admin.contact.telegram': 'Telegram username',
      'admin.contact.save': 'Save contact info',
      'admin.contact.saved': 'Saved.',
      'admin.form.title': 'New Template',
      'admin.form.name': 'Website title',
      'admin.form.namePlaceholder': 'Aurora Portfolio',
      'admin.form.price': 'Price (TJS)',
      'admin.form.publish': 'Save and publish',
      'admin.form.publishedNote': 'Published to the storefront.',
      'admin.form.errorFields': 'Please fill in the title, price and at least the HTML code.',
      'admin.manage.title': 'Published templates',
      'admin.manage.empty': 'Nothing published yet — your new template will show up here.',
      'admin.manage.delete': 'Delete',
      'showcase.heading': 'Storefront',
      'showcase.subheading': "Live inventory of every template that's been published.",
      'showcase.empty.title': 'No active websites yet',
      'showcase.empty.text': 'Check back soon — new templates are added regularly.',
      'card.priceLabel': 'Price',
      'card.currency': 'TJS',
      'card.preview': 'Live Preview',
      'card.whatsapp': 'WhatsApp',
      'card.telegram': 'Telegram',
      'card.noContactWhatsapp': 'Add a WhatsApp number in Store Contact first.',
      'card.noContactTelegram': 'Add a Telegram username in Store Contact first.',
      'whatsapp.message': 'Hi! I would like to purchase the "{title}" website template for {price} TJS.',
      'modal.title': 'Live Preview',
      'footer.text': 'Marketa — a lightweight template exchange. All data stored locally in your browser.',
    },
    ru: {
      'nav.adminBadge': 'Режим администратора',
      'nav.backToStore': '← Назад в магазин',
      'login.title': 'Вход для администратора',
      'login.hint': 'Введите данные администратора, чтобы продолжить.',
      'login.username': 'Имя пользователя',
      'login.password': 'Пароль',
      'login.submit': 'Войти',
      'login.error': 'Неверное имя пользователя или пароль.',
      'login.logout': 'Выйти',
      'hero.eyebrow': '01001101 — обмен шаблонами',
      'hero.title1': 'Запускайте сайт',
      'hero.title2': 'быстрее, чем остынет кофе.',
      'hero.subtitle': 'Просматривайте готовые шаблоны ниже. Смотрите живой предпросмотр, а затем свяжитесь с продавцом в WhatsApp или Telegram в один клик.',
      'admin.heading': 'Консоль администратора',
      'admin.subheading': 'Публикуйте новые шаблоны и управляйте контактами витрины.',
      'admin.contact.title': 'Контакты магазина',
      'admin.contact.hint': 'Используются в кнопках «WhatsApp» и «Telegram» на витрине.',
      'admin.contact.whatsapp': 'Номер WhatsApp (с кодом страны)',
      'admin.contact.telegram': 'Имя пользователя Telegram',
      'admin.contact.save': 'Сохранить контакты',
      'admin.contact.saved': 'Сохранено.',
      'admin.form.title': 'Новый шаблон',
      'admin.form.name': 'Название сайта',
      'admin.form.namePlaceholder': 'Aurora Portfolio',
      'admin.form.price': 'Цена (TJS)',
      'admin.form.publish': 'Сохранить и опубликовать',
      'admin.form.publishedNote': 'Опубликовано на витрине.',
      'admin.form.errorFields': 'Заполните название, цену и хотя бы HTML-код.',
      'admin.manage.title': 'Опубликованные шаблоны',
      'admin.manage.empty': 'Пока ничего не опубликовано — новый шаблон появится здесь.',
      'admin.manage.delete': 'Удалить',
      'showcase.heading': 'Витрина',
      'showcase.subheading': 'Актуальный список всех опубликованных шаблонов.',
      'showcase.empty.title': 'Пока нет активных сайтов',
      'showcase.empty.text': 'Загляните позже — новые шаблоны добавляются регулярно.',
      'card.priceLabel': 'Цена',
      'card.currency': 'TJS',
      'card.preview': 'Предпросмотр',
      'card.whatsapp': 'WhatsApp',
      'card.telegram': 'Telegram',
      'card.noContactWhatsapp': 'Сначала добавьте номер WhatsApp в контактах магазина.',
      'card.noContactTelegram': 'Сначала добавьте имя пользователя Telegram в контактах магазина.',
      'whatsapp.message': 'Здравствуйте! Хочу приобрести шаблон сайта «{title}» за {price} TJS.',
      'modal.title': 'Предпросмотр',
      'footer.text': 'Marketa — лёгкая площадка обмена шаблонами. Все данные хранятся локально в вашем браузере.',
    },
    tj: {
      'nav.adminBadge': 'Реҷаи админ',
      'nav.backToStore': '← Бозгашт ба мағоза',
      'login.title': 'Воридшавии админ',
      'login.hint': 'Барои идома додан маълумоти воридшавии худро ворид кунед.',
      'login.username': 'Номи корбар',
      'login.password': 'Парол',
      'login.submit': 'Ворид шудан',
      'login.error': 'Номи корбар ё парол нодуруст аст.',
      'login.logout': 'Баромадан',
      'hero.eyebrow': '01001101 — мубодилаи шаблон',
      'hero.title1': 'Сомонаро оғоз кунед',
      'hero.title2': 'пеш аз хунук шудани қаҳва.',
      'hero.subtitle': 'Шаблонҳои тайёрро дар поён бинед. Пешнамоиши зиндаро тамошо кунед ва сипас бо як зарба тавассути WhatsApp ё Telegram бо фурӯшанда тамос гиред.',
      'admin.heading': 'Консоли админ',
      'admin.subheading': 'Шаблонҳои нав нашр кунед ва алоқаҳои витринаро идора кунед.',
      'admin.contact.title': 'Тамоси мағоза',
      'admin.contact.hint': 'Дар ҳар як тугмаи «WhatsApp» ва «Telegram»-и витрина истифода мешавад.',
      'admin.contact.whatsapp': 'Рақами WhatsApp (бо рамзи кишвар)',
      'admin.contact.telegram': 'Номи корбарии Telegram',
      'admin.contact.save': 'Захираи тамос',
      'admin.contact.saved': 'Захира шуд.',
      'admin.form.title': 'Шаблони нав',
      'admin.form.name': 'Номи сомона',
      'admin.form.namePlaceholder': 'Aurora Portfolio',
      'admin.form.price': 'Нарх (TJS)',
      'admin.form.publish': 'Захира ва нашр кардан',
      'admin.form.publishedNote': 'Дар витрина нашр шуд.',
      'admin.form.errorFields': 'Лутфан унвон, нарх ва ҳадди ақал коди HTML-ро пур кунед.',
      'admin.manage.title': 'Шаблонҳои нашршуда',
      'admin.manage.empty': 'То ҳол чизе нашр нашудааст — шаблони нави шумо дар ин ҷо намоён мешавад.',
      'admin.manage.delete': 'Нест кардан',
      'showcase.heading': 'Витрина',
      'showcase.subheading': 'Рӯйхати зиндаи ҳамаи шаблонҳои нашршуда.',
      'showcase.empty.title': 'То ҳол сомонаи фаъол нест',
      'showcase.empty.text': 'Пас аз андак вақт бозгардед — шаблонҳои нав мунтазам илова мешаванд.',
      'card.priceLabel': 'Нарх',
      'card.currency': 'TJS',
      'card.preview': 'Пешнамоиши зинда',
      'card.whatsapp': 'WhatsApp',
      'card.telegram': 'Telegram',
      'card.noContactWhatsapp': 'Аввал рақами WhatsApp-ро дар тамоси мағоза илова кунед.',
      'card.noContactTelegram': 'Аввал номи корбарии Telegram-ро дар тамоси мағоза илова кунед.',
      'whatsapp.message': 'Салом! Ман мехоҳам шаблони сомонаи «{title}»-ро ба нархи {price} TJS харам.',
      'modal.title': 'Пешнамоиши зинда',
      'footer.text': 'Marketa — платформаи сабуки мубодилаи шаблонҳо. Ҳамаи маълумот дар браузери шумо маҳаллӣ нигоҳ дошта мешавад.',
    },
  };

  const STORAGE_KEYS = {
    lang: 'marketa_lang',
  };

  // Admin credentials now live in Firebase Authentication (see
  // firebase-config.js for setup instructions) instead of being
  // hardcoded here in plain text, which anyone could read via
  // "view source".

  let state = {
    lang: localStorage.getItem(STORAGE_KEYS.lang) || 'en',
    templates: [],
    contact: { whatsapp: '', telegram: '' },
  };

  /* =========================================================
     STORAGE HELPERS (Firestore — shared across all visitors)
     ---------------------------------------------------------
     Templates published by the admin are written to the
     "templates" collection and contact info to the single
     "settings/contact" document. Both are subscribed to in
     real time (onSnapshot), so every visitor's storefront and
     the admin console update instantly without a page reload.
  ========================================================= */
  const TEMPLATES_COLLECTION = 'templates';
  const CONTACT_DOC = 'settings/contact';

  function getDb() {
    if (!window.db) {
      console.error('Firestore is not initialized — check firebase-config.js');
      return null;
    }
    return window.db;
  }

  async function saveTemplateRemote(item) {
    const db = getDb();
    if (!db) return;
    await db.collection(TEMPLATES_COLLECTION).doc(item.id).set(item);
  }

  async function deleteTemplateRemote(id) {
    const db = getDb();
    if (!db) return;
    await db.collection(TEMPLATES_COLLECTION).doc(id).delete();
  }

  async function saveContact() {
    const db = getDb();
    if (!db) return;
    await db.doc(CONTACT_DOC).set(state.contact);
  }

  function subscribeToTemplates() {
    const db = getDb();
    if (!db) return;
    db.collection(TEMPLATES_COLLECTION)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        state.templates = snapshot.docs.map((doc) => doc.data());
        renderManageList();
        renderCards();
      }, (err) => console.error('Templates sync error:', err));
  }

  function subscribeToContact() {
    const db = getDb();
    if (!db) return;
    db.doc(CONTACT_DOC).onSnapshot((doc) => {
      state.contact = doc.exists ? doc.data() : { whatsapp: '', telegram: '' };
      hydrateContactInputs();
      renderCards();
    }, (err) => console.error('Contact sync error:', err));
  }

  /* =========================================================
     I18N ENGINE
  ========================================================= */
  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  }

  function applyTranslations() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.getElementById('modalTitle').textContent = t('modal.title');
    renderManageList();
    renderCards();
  }

  /* =========================================================
     DOM REFS
  ========================================================= */
  const langSelect = document.getElementById('langSelect');
  const ownerWhatsappInput = document.getElementById('ownerWhatsapp');
  const ownerTelegramInput = document.getElementById('ownerTelegram');
  const saveContactBtn = document.getElementById('saveContactBtn');
  const contactSavedNote = document.getElementById('contactSavedNote');

  const siteTitleInput = document.getElementById('siteTitle');
  const sitePriceInput = document.getElementById('sitePrice');
  const codeHtml = document.getElementById('codeHtml');
  const codeCss = document.getElementById('codeCss');
  const codeJs = document.getElementById('codeJs');
  const publishBtn = document.getElementById('publishBtn');
  const publishNote = document.getElementById('publishNote');

  const manageListItems = document.getElementById('manageListItems');
  const emptyState = document.getElementById('emptyState');
  const cardGrid = document.getElementById('cardGrid');

  const clientView = document.getElementById('clientView');
  const adminView = document.getElementById('adminView');
  const backToStoreLink = document.getElementById('backToStoreLink');

  const adminLogin = document.getElementById('adminLogin');
  const adminPanel = document.getElementById('admin-panel');
  const loginUsername = document.getElementById('loginUsername');
  const loginPassword = document.getElementById('loginPassword');
  const loginSubmitBtn = document.getElementById('loginSubmitBtn');
  const loginError = document.getElementById('loginError');
  const logoutBtn = document.getElementById('logoutBtn');

  const previewModal = document.getElementById('previewModal');
  const previewFrame = document.getElementById('previewFrame');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  /* =========================================================
     EDITOR TABS
  ========================================================= */
  document.querySelectorAll('.editor-tab').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const target = tabBtn.getAttribute('data-tab');
      document.querySelectorAll('.editor-tab').forEach((b) => b.classList.remove('is-active'));
      document.querySelectorAll('.editor-pane').forEach((p) => p.classList.remove('is-active'));
      tabBtn.classList.add('is-active');
      document.querySelector(`[data-tab-pane="${target}"]`).classList.add('is-active');
    });
  });

  /* =========================================================
     LANGUAGE SWITCH
  ========================================================= */
  langSelect.value = state.lang;
  langSelect.addEventListener('change', () => {
    state.lang = langSelect.value;
    localStorage.setItem(STORAGE_KEYS.lang, state.lang);
    applyTranslations();
  });

  /* =========================================================
     CONTACT SETTINGS
  ========================================================= */
  function hydrateContactInputs() {
    ownerWhatsappInput.value = state.contact.whatsapp || '';
    ownerTelegramInput.value = state.contact.telegram || '';
  }

  saveContactBtn.addEventListener('click', async () => {
    state.contact = {
      whatsapp: ownerWhatsappInput.value.trim(),
      telegram: ownerTelegramInput.value.trim(),
    };
    try {
      await saveContact();
      contactSavedNote.classList.add('is-visible');
      setTimeout(() => contactSavedNote.classList.remove('is-visible'), 2200);
    } catch (err) {
      console.error('Saving contact failed:', err);
    }
  });

  /* =========================================================
     PUBLISH TEMPLATE
  ========================================================= */
  function resetForm() {
    siteTitleInput.value = '';
    sitePriceInput.value = '';
    codeHtml.value = '';
    codeCss.value = '';
    codeJs.value = '';
  }

  publishBtn.addEventListener('click', async () => {
    const title = siteTitleInput.value.trim();
    const price = sitePriceInput.value.trim();
    const html = codeHtml.value;
    const css = codeCss.value;
    const js = codeJs.value;

    if (!title || !price || !html) {
      publishNote.textContent = t('admin.form.errorFields');
      publishNote.style.color = 'var(--accent-red)';
      publishNote.classList.add('is-visible');
      setTimeout(() => publishNote.classList.remove('is-visible'), 3000);
      return;
    }

    const item = {
      id: 'tpl_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      title,
      price: Number(price),
      html,
      css,
      js,
      createdAt: Date.now(),
    };

    publishBtn.disabled = true;
    try {
      await saveTemplateRemote(item);
      // No need to touch state.templates or re-render here —
      // the Firestore onSnapshot listener does it for every
      // open tab/browser, including this one.
      resetForm();
      publishNote.textContent = t('admin.form.publishedNote');
      publishNote.style.color = 'var(--accent-green)';
      publishNote.classList.add('is-visible');
      setTimeout(() => publishNote.classList.remove('is-visible'), 2500);
    } catch (err) {
      console.error('Publish failed:', err);
      publishNote.textContent = t('admin.form.errorFields');
      publishNote.style.color = 'var(--accent-red)';
      publishNote.classList.add('is-visible');
      setTimeout(() => publishNote.classList.remove('is-visible'), 3000);
    } finally {
      publishBtn.disabled = false;
    }
  });

  /* =========================================================
     DELETE TEMPLATE
  ========================================================= */
  async function deleteTemplate(id) {
    try {
      await deleteTemplateRemote(id);
      // onSnapshot listener updates state.templates + re-renders.
    } catch (err) {
      console.error('Delete failed:', err);
    }
  }

  /* =========================================================
     RENDER: MANAGE LIST (admin)
  ========================================================= */
  function renderManageList() {
    manageListItems.innerHTML = '';

    if (state.templates.length === 0) {
      const p = document.createElement('p');
      p.className = 'manage-list__empty';
      p.textContent = t('admin.manage.empty');
      manageListItems.appendChild(p);
      return;
    }

    state.templates.forEach((tpl) => {
      const row = document.createElement('div');
      row.className = 'manage-row';

      const info = document.createElement('div');
      const nameSpan = document.createElement('span');
      nameSpan.className = 'manage-row__name';
      nameSpan.textContent = tpl.title;
      const priceSpan = document.createElement('span');
      priceSpan.className = 'manage-row__price';
      priceSpan.textContent = tpl.price + ' ' + t('card.currency');
      info.appendChild(nameSpan);
      info.appendChild(priceSpan);

      const delBtn = document.createElement('button');
      delBtn.className = 'manage-row__delete';
      delBtn.textContent = t('admin.manage.delete');
      delBtn.addEventListener('click', () => deleteTemplate(tpl.id));

      row.appendChild(info);
      row.appendChild(delBtn);
      manageListItems.appendChild(row);
    });
  }

  /* =========================================================
     RENDER: CARDS (showcase)
  ========================================================= */
  function buildWhatsappUrl(tpl) {
    const phone = (state.contact.whatsapp || '').replace(/[^\d+]/g, '').replace(/^\+/, '');
    const message = t('whatsapp.message')
      .replace('{title}', tpl.title)
      .replace('{price}', tpl.price);
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
  function buildTelegramUrl() {
    const handle = (state.contact.telegram || '').replace(/^@/, '');
    return `https://t.me/${handle}`;
  }

  function buildTemplateDoc(tpl) {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>html,body{margin:0;padding:0;}${tpl.css || ''}</style>
</head>
<body>
${tpl.html || ''}
<script>${tpl.js || ''}<\/script>
</body>
</html>`;
  }

  function renderCards() {
    cardGrid.innerHTML = '';

    if (state.templates.length === 0) {
      emptyState.classList.remove('is-hidden');
      cardGrid.style.display = 'none';
      return;
    }
    emptyState.classList.add('is-hidden');
    cardGrid.style.display = 'grid';

    state.templates.forEach((tpl) => {
      const card = document.createElement('article');
      card.className = 'card';

      card.innerHTML = `
        <div class="card__thumb" data-action="thumb" role="button" tabindex="0" aria-label="${t('card.preview')}">
          <div class="card__thumb-frame-wrap">
            <iframe class="card__thumb-frame" sandbox="allow-scripts" tabindex="-1" aria-hidden="true" loading="lazy"></iframe>
          </div>
          <div class="card__thumb-chrome">
            <span class="dot dot--red"></span>
            <span class="dot dot--yellow"></span>
            <span class="dot dot--green"></span>
          </div>
        </div>
        <div class="card__body">
          <h3 class="card__title"></h3>
          <p class="card__price"></p>
          <div class="card__actions">
            <button class="card__btn card__btn--preview" data-action="preview">${t('card.preview')}</button>
            <a class="card__btn card__btn--whatsapp" data-action="whatsapp" target="_blank" rel="noopener">${t('card.whatsapp')}</a>
            <a class="card__btn card__btn--telegram" data-action="telegram" target="_blank" rel="noopener">${t('card.telegram')}</a>
          </div>
        </div>
      `;

      card.querySelector('.card__thumb-frame').srcdoc = buildTemplateDoc(tpl);

      card.querySelector('.card__title').textContent = tpl.title;
      card.querySelector('.card__price').textContent = `${t('card.priceLabel')}: ${tpl.price} ${t('card.currency')}`;

      const thumb = card.querySelector('[data-action="thumb"]');
      thumb.addEventListener('click', () => openPreview(tpl));
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPreview(tpl); }
      });

      const previewBtn = card.querySelector('[data-action="preview"]');
      previewBtn.addEventListener('click', () => openPreview(tpl));

      const waLink = card.querySelector('[data-action="whatsapp"]');
      const tgLink = card.querySelector('[data-action="telegram"]');

      if (state.contact.whatsapp) {
        waLink.href = buildWhatsappUrl(tpl);
      } else {
        waLink.href = '#admin-panel';
        waLink.addEventListener('click', (e) => {
          e.preventDefault();
          alert(t('card.noContactWhatsapp'));
        });
      }

      if (state.contact.telegram) {
        tgLink.href = buildTelegramUrl();
      } else {
        tgLink.href = '#admin-panel';
        tgLink.addEventListener('click', (e) => {
          e.preventDefault();
          alert(t('card.noContactTelegram'));
        });
      }

      cardGrid.appendChild(card);
    });
  }

  /* =========================================================
     LIVE PREVIEW MODAL
  ========================================================= */
  function openPreview(tpl) {
    previewFrame.srcdoc = buildTemplateDoc(tpl);
    document.getElementById('modalTitle').textContent = `${t('modal.title')} — ${tpl.title}`;
    previewModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closePreview() {
    previewModal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { previewFrame.srcdoc = ''; }, 300);
  }

  modalCloseBtn.addEventListener('click', closePreview);
  previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) closePreview();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && previewModal.classList.contains('is-open')) closePreview();
  });

  /* =========================================================
     ADMIN AUTH — Firebase Authentication (email/password)
     ---------------------------------------------------------
     Only an account that was manually created in the Firebase
     console (Authentication → Users) can sign in here. There
     is no sign-up flow anywhere in this app, so this is the
     one and only admin. Firestore's security rules (see
     firebase-config.js) reject any publish/delete/contact
     write unless this sign-in has actually succeeded, so it's
     enforced server-side, not just hidden in the UI.
  ========================================================= */
  function isAuthenticated() {
    return !!(window.auth && window.auth.currentUser);
  }

  async function attemptLogin() {
    const email = loginUsername.value.trim();
    const password = loginPassword.value;

    if (!window.auth) {
      loginError.textContent = 'Firebase Auth is not configured — check firebase-config.js.';
      loginError.classList.add('is-visible');
      return;
    }

    loginSubmitBtn.disabled = true;
    try {
      await window.auth.signInWithEmailAndPassword(email, password);
      loginError.classList.remove('is-visible');
      loginPassword.value = '';
      // onAuthStateChanged (registered below) takes care of
      // switching the view to the admin console.
    } catch (err) {
      loginError.textContent = t('login.error');
      loginError.classList.add('is-visible');
    } finally {
      loginSubmitBtn.disabled = false;
    }
  }

  function logout() {
    if (window.auth) window.auth.signOut();
    loginUsername.value = '';
    loginPassword.value = '';
    window.location.hash = '#/';
  }

  function showAdminConsole() {
    adminLogin.classList.add('is-hidden');
    adminPanel.classList.remove('is-hidden');
    hydrateContactInputs();
    renderManageList();
  }

  function showAdminLogin() {
    adminPanel.classList.add('is-hidden');
    adminLogin.classList.remove('is-hidden');
    loginError.classList.remove('is-visible');
  }

  loginSubmitBtn.addEventListener('click', attemptLogin);
  [loginUsername, loginPassword].forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') attemptLogin();
    });
  });
  logoutBtn.addEventListener('click', logout);

  // Keep the view in sync with the actual Firebase auth state —
  // covers page reloads, session expiry, and signing out in
  // another tab.
  if (window.auth) {
    window.auth.onAuthStateChanged(() => {
      if (getRoute() === 'admin') applyRoute();
    });
  }

  /* =========================================================
     ROUTER — admin panel is only reachable at #/admin or #admin
  ========================================================= */
  function getRoute() {
    return window.location.hash.replace(/^#\/?/, '').toLowerCase();
  }

  function applyRoute() {
    const isAdmin = getRoute() === 'admin';

    document.body.classList.toggle('is-admin-route', isAdmin);
    clientView.classList.toggle('is-hidden', isAdmin);
    adminView.classList.toggle('is-hidden', !isAdmin);

    if (isAdmin) {
      if (isAuthenticated()) {
        showAdminConsole();
      } else {
        showAdminLogin();
      }
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }

  window.addEventListener('hashchange', applyRoute);
  backToStoreLink.addEventListener('click', () => {
    // Explicitly clear to a non-admin route so hashchange always fires.
    if (window.location.hash === '#/admin' || window.location.hash === '#admin') {
      window.location.hash = '#/';
    }
  });

  /* =========================================================
     INIT
  ========================================================= */
  function init() {
    hydrateContactInputs();
    applyTranslations();
    applyRoute();
    subscribeToTemplates();
    subscribeToContact();
  }

  init();
})();