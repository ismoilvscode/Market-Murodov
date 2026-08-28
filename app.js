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
      'login.hint': 'Enter your admin email and password to continue.',
      'login.username': 'Email',
      'login.password': 'Password',
      'login.submit': 'Sign in',
      'login.error': 'Incorrect email or password.',
      'login.logout': 'Log out',
      'hero.eyebrow': 'WebLy — website template exchange',
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
      'admin.form.price': 'Price ($)',
      'admin.form.publish': 'Save and publish',
      'admin.form.publishedNote': 'Published to the storefront.',
      'admin.form.errorFields': 'Please fill in the title, price and at least the HTML code.',
      'admin.manage.title': 'Published templates',
      'admin.manage.empty': 'Nothing published yet — your new template will show up here.',
      'admin.manage.edit': 'Edit',
      'admin.manage.delete': 'Delete',
      'admin.form.update': 'Save changes',
      'admin.form.cancelEdit': 'Cancel edit',
      'admin.form.updatedNote': 'Changes saved.',
      'admin.orders.title': 'Incoming orders',
      'admin.orders.empty': 'No custom orders yet.',
      'admin.orders.handle': 'Mark handled',
      'admin.orders.delete': 'Delete',
      'order.heading': 'Order a custom site',
      'order.subheading': "Don't see what you need? Describe it and it goes straight to the seller.",
      'order.name': 'Your name',
      'order.namePlaceholder': 'Aziz',
      'order.budget': 'Budget ($)',
      'order.budgetPlaceholder': '500',
      'order.phone': 'Phone number',
      'order.phonePlaceholder': '+992 90 123 4567',
      'order.telegram': 'Telegram username',
      'order.telegramPlaceholder': '@aziz',
      'order.message': 'What kind of site do you need?',
      'order.messagePlaceholder': 'E.g. a landing page for my cafe, with a menu and an order button...',
      'order.hint': 'Fill in at least one contact — phone or Telegram.',
      'order.submit': 'Send order',
      'order.success': 'Sent! The seller will reach out to you shortly.',
      'order.errorFields': 'Please fill in your name, a phone or Telegram, and a short description.',
      'order.error': 'Something went wrong — please try again.',
      'showcase.heading': 'Storefront',
      'showcase.subheading': "Live inventory of every template that's been published.",
      'showcase.empty.title': 'No active websites yet',
      'showcase.empty.text': 'Check back soon — new templates are added regularly.',
      'hero.cta1': 'Browse the storefront',
      'hero.cta2': 'Order a custom site',
      'about.heading': 'About me',
      'about.subheading': 'The designer behind WebLy.',
      'about.name': 'Murodov Ismoil',
      'about.role': 'Web designer & front-end developer',
      'about.bio': 'I design and build fast, good-looking websites — from ready-made templates to fully custom builds. Every project on this storefront is made and shipped by me, end to end.',
      'about.tag1': 'HTML / CSS / JS',
      'about.tag2': 'UI Design',
      'about.tag3': 'Firebase',
      'about.tag4': '3D & motion',
      'about.stat1Num': '100%',
      'about.stat1Label': 'Custom-built, no drag-and-drop templates',
      'about.stat2Num': '1:1',
      'about.stat2Label': 'Direct contact, no middlemen',
      'about.stat3Num': '∞',
      'about.stat3Label': "Revisions until you're happy",
      'card.priceLabel': 'Price',
      'card.currency': '$',
      'card.preview': 'Live Preview',
      'card.whatsapp': 'WhatsApp',
      'card.telegram': 'Telegram',
      'card.noContactWhatsapp': 'Add a WhatsApp number in Store Contact first.',
      'card.noContactTelegram': 'Add a Telegram username in Store Contact first.',
      'whatsapp.message': 'Hi! I would like to purchase the "{title}" website template for {price} $.',
      'modal.title': 'Live Preview',
      'footer.text': 'WebLy — a lightweight template exchange. All data stored locally in your browser.',
    },
    ru: {
      'nav.adminBadge': 'Режим администратора',
      'nav.backToStore': '← Назад в магазин',
      'login.title': 'Вход для администратора',
      'login.hint': 'Введите email и пароль администратора, чтобы продолжить.',
      'login.username': 'Email',
      'login.password': 'Пароль',
      'login.submit': 'Войти',
      'login.error': 'Неверный email или пароль.',
      'login.logout': 'Выйти',
      'hero.eyebrow': 'WebLy — обмен шаблонами сайтов',
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
      'admin.form.price': 'Цена ($)',
      'admin.form.publish': 'Сохранить и опубликовать',
      'admin.form.publishedNote': 'Опубликовано на витрине.',
      'admin.form.errorFields': 'Заполните название, цену и хотя бы HTML-код.',
      'admin.manage.title': 'Опубликованные шаблоны',
      'admin.manage.empty': 'Пока ничего не опубликовано — новый шаблон появится здесь.',
      'admin.manage.edit': 'Изменить',
      'admin.manage.delete': 'Удалить',
      'admin.form.update': 'Сохранить изменения',
      'admin.form.cancelEdit': 'Отменить редактирование',
      'admin.form.updatedNote': 'Изменения сохранены.',
      'admin.orders.title': 'Новые заказы',
      'admin.orders.empty': 'Пока нет заказов на индивидуальный сайт.',
      'admin.orders.handle': 'Отметить как обработан',
      'admin.orders.delete': 'Удалить',
      'order.heading': 'Заказать сайт под себя',
      'order.subheading': 'Не нашли то, что нужно? Опишите — и заявка уйдёт прямо продавцу.',
      'order.name': 'Ваше имя',
      'order.namePlaceholder': 'Азиз',
      'order.budget': 'Бюджет ($)',
      'order.budgetPlaceholder': '500',
      'order.phone': 'Номер телефона',
      'order.phonePlaceholder': '+992 90 123 4567',
      'order.telegram': 'Имя пользователя Telegram',
      'order.telegramPlaceholder': '@aziz',
      'order.message': 'Какой сайт вам нужен?',
      'order.messagePlaceholder': 'Например: лендинг для моего кафе с меню и кнопкой заказа...',
      'order.hint': 'Укажите хотя бы один контакт — телефон или Telegram.',
      'order.submit': 'Отправить заказ',
      'order.success': 'Отправлено! Продавец скоро свяжется с вами.',
      'order.errorFields': 'Заполните имя, телефон или Telegram, и краткое описание.',
      'order.error': 'Что-то пошло не так — попробуйте ещё раз.',
      'showcase.heading': 'Витрина',
      'showcase.subheading': 'Актуальный список всех опубликованных шаблонов.',
      'showcase.empty.title': 'Пока нет активных сайтов',
      'showcase.empty.text': 'Загляните позже — новые шаблоны добавляются регулярно.',
      'hero.cta1': 'Смотреть витрину',
      'hero.cta2': 'Заказать сайт под себя',
      'about.heading': 'Обо мне',
      'about.subheading': 'Дизайнер, стоящий за WebLy.',
      'about.name': 'Муродов Исмоил',
      'about.role': 'Веб-дизайнер и фронт-энд разработчик',
      'about.bio': 'Я проектирую и создаю быстрые, стильные сайты — от готовых шаблонов до полностью индивидуальных решений. Каждый проект в этой витрине сделан и опубликован мной от начала до конца.',
      'about.tag1': 'HTML / CSS / JS',
      'about.tag2': 'UI-дизайн',
      'about.tag3': 'Firebase',
      'about.tag4': '3D и анимация',
      'about.stat1Num': '100%',
      'about.stat1Label': 'Индивидуальная разработка, без конструкторов',
      'about.stat2Num': '1:1',
      'about.stat2Label': 'Прямой контакт, без посредников',
      'about.stat3Num': '∞',
      'about.stat3Label': 'Правки, пока вы не будете довольны',
      'card.priceLabel': 'Цена',
      'card.currency': '$',
      'card.preview': 'Предпросмотр',
      'card.whatsapp': 'WhatsApp',
      'card.telegram': 'Telegram',
      'card.noContactWhatsapp': 'Сначала добавьте номер WhatsApp в контактах магазина.',
      'card.noContactTelegram': 'Сначала добавьте имя пользователя Telegram в контактах магазина.',
      'whatsapp.message': 'Здравствуйте! Хочу приобрести шаблон сайта «{title}» за {price} $.',
      'modal.title': 'Предпросмотр',
      'footer.text': 'WebLy — лёгкая площадка обмена шаблонами. Все данные хранятся локально в вашем браузере.',
    },
    tj: {
      'nav.adminBadge': 'Реҷаи админ',
      'nav.backToStore': '← Бозгашт ба мағоза',
      'login.title': 'Воридшавии админ',
      'login.hint': 'Барои идома додан email ва пароли админро ворид кунед.',
      'login.username': 'Email',
      'login.password': 'Парол',
      'login.submit': 'Ворид шудан',
      'login.error': 'Email ё парол нодуруст аст.',
      'login.logout': 'Баромадан',
      'hero.eyebrow': 'WebLy — мубодилаи шаблони сомона',
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
      'admin.form.price': 'Нарх ($)',
      'admin.form.publish': 'Захира ва нашр кардан',
      'admin.form.publishedNote': 'Дар витрина нашр шуд.',
      'admin.form.errorFields': 'Лутфан унвон, нарх ва ҳадди ақал коди HTML-ро пур кунед.',
      'admin.manage.title': 'Шаблонҳои нашршуда',
      'admin.manage.empty': 'То ҳол чизе нашр нашудааст — шаблони нави шумо дар ин ҷо намоён мешавад.',
      'admin.manage.edit': 'Тағйир додан',
      'admin.manage.delete': 'Нест кардан',
      'admin.form.update': 'Захираи тағйирот',
      'admin.form.cancelEdit': 'Бекор кардани таҳрир',
      'admin.form.updatedNote': 'Тағйирот захира шуд.',
      'admin.orders.title': 'Фармоишҳои нав',
      'admin.orders.empty': 'То ҳол фармоиши фардӣ нест.',
      'admin.orders.handle': 'Иҷрошуда қайд кардан',
      'admin.orders.delete': 'Нест кардан',
      'order.heading': 'Сомонаи фардиро фармоиш диҳед',
      'order.subheading': 'Чизи даркориро наёфтед? Тасвир кунед — дархост рост ба фурӯшанда меравад.',
      'order.name': 'Номи шумо',
      'order.namePlaceholder': 'Азиз',
      'order.budget': 'Буҷа ($)',
      'order.budgetPlaceholder': '500',
      'order.phone': 'Рақами телефон',
      'order.phonePlaceholder': '+992 90 123 4567',
      'order.telegram': 'Номи корбарии Telegram',
      'order.telegramPlaceholder': '@aziz',
      'order.message': 'Чӣ хел сомона лозим аст?',
      'order.messagePlaceholder': 'Масалан: лендинги кафеи ман бо меню ва тугмаи фармоиш...',
      'order.hint': 'Ҳадди ақал як тамос пур кунед — телефон ё Telegram.',
      'order.submit': 'Фиристодани фармоиш',
      'order.success': 'Фиристода шуд! Фурӯшанда ба зудӣ бо шумо тамос мегирад.',
      'order.errorFields': 'Лутфан ном, телефон ё Telegram, ва тавсифи кӯтоҳро пур кунед.',
      'order.error': 'Хатое рух дод — лутфан бори дигар кӯшиш кунед.',
      'showcase.heading': 'Витрина',
      'showcase.subheading': 'Рӯйхати зиндаи ҳамаи шаблонҳои нашршуда.',
      'showcase.empty.title': 'То ҳол сомонаи фаъол нест',
      'showcase.empty.text': 'Пас аз андак вақт бозгардед — шаблонҳои нав мунтазам илова мешаванд.',
      'hero.cta1': 'Дидани витрина',
      'hero.cta2': 'Фармоиши сомонаи фардӣ',
      'about.heading': 'Дар бораи ман',
      'about.subheading': 'Дизайнере, ки WebLy-ро сохтааст.',
      'about.name': 'Муродов Исмоил',
      'about.role': 'Веб-дизайнер ва барномасози фронт-энд',
      'about.bio': 'Ман сомонаҳои тез ва зебоеро тарҳрезӣ ва месозам — аз шаблонҳои омода то лоиҳаҳои комилан фардӣ. Ҳар лоиҳа дар ин витрина аз ибтидо то интиҳо аз ҷониби худи ман сохта ва нашр мешавад.',
      'about.tag1': 'HTML / CSS / JS',
      'about.tag2': 'Дизайни UI',
      'about.tag3': 'Firebase',
      'about.tag4': '3D ва анимация',
      'about.stat1Num': '100%',
      'about.stat1Label': 'Комилан фардӣ, бе конструктор',
      'about.stat2Num': '1:1',
      'about.stat2Label': 'Тамоси мустақим, бе миёнарав',
      'about.stat3Num': '∞',
      'about.stat3Label': 'Ислоҳот то он даме, ки шумо қаноатманд шавед',
      'card.priceLabel': 'Нарх',
      'card.currency': '$',
      'card.preview': 'Пешнамоиши зинда',
      'card.whatsapp': 'WhatsApp',
      'card.telegram': 'Telegram',
      'card.noContactWhatsapp': 'Аввал рақами WhatsApp-ро дар тамоси мағоза илова кунед.',
      'card.noContactTelegram': 'Аввал номи корбарии Telegram-ро дар тамоси мағоза илова кунед.',
      'whatsapp.message': 'Салом! Ман мехоҳам шаблони сомонаи «{title}»-ро ба нархи {price} $ харам.',
      'modal.title': 'Пешнамоиши зинда',
      'footer.text': 'WebLy — платформаи сабуки мубодилаи шаблонҳо. Ҳамаи маълумот дар браузери шумо маҳаллӣ нигоҳ дошта мешавад.',
    },
  };

  const STORAGE_KEYS = {
    lang: 'webly_lang',
  };

  // Admin credentials now live in Firebase Authentication (see
  // firebase-config.js for setup instructions) instead of being
  // hardcoded here in plain text, which anyone could read via
  // "view source".

  let state = {
    lang: localStorage.getItem(STORAGE_KEYS.lang) || 'en',
    templates: [],
    contact: { whatsapp: '', telegram: '' },
    orders: [],
  };

  // Set while the admin is editing an existing template (via the
  // "Edit" button in the manage list) instead of publishing a new
  // one. See enterEditMode()/exitEditMode() further down.
  let editingTemplateId = null;

  // Holds the Firestore unsubscribe function for the live orders
  // listener, so it can be detached on logout (orders are only
  // readable while signed in — see firebase-config.js rules).
  let ordersUnsubscribe = null;

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
  const ORDERS_COLLECTION = 'orders';

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
     CUSTOM ORDERS
     ---------------------------------------------------------
     Anyone can create an order (write-only for non-admins, per
     firebase-config.js rules); only the signed-in admin can
     read/update/delete them, so this listener only ever runs
     while authenticated (see showAdminConsole()/logout()).
  ========================================================= */
  async function createOrderRemote(order) {
    const db = getDb();
    if (!db) throw new Error('Firestore is not initialized');
    await db.collection(ORDERS_COLLECTION).doc(order.id).set(order);
  }

  function subscribeToOrders() {
    const db = getDb();
    if (!db || ordersUnsubscribe) return;
    ordersUnsubscribe = db.collection(ORDERS_COLLECTION)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        state.orders = snapshot.docs.map((doc) => doc.data());
        renderOrdersList();
      }, (err) => console.error('Orders sync error:', err));
  }

  function unsubscribeFromOrders() {
    if (ordersUnsubscribe) {
      ordersUnsubscribe();
      ordersUnsubscribe = null;
    }
    state.orders = [];
    renderOrdersList();
  }

  async function setOrderHandledRemote(id) {
    const db = getDb();
    if (!db) return;
    await db.collection(ORDERS_COLLECTION).doc(id).update({ status: 'handled' });
  }

  async function deleteOrderRemote(id) {
    const db = getDb();
    if (!db) return;
    await db.collection(ORDERS_COLLECTION).doc(id).delete();
  }

  // Best-effort ping to the admin's Telegram — see step 6 in
  // firebase-config.js for setup. Orders are already durably
  // saved in Firestore by the time this runs, so a network hiccup
  // or an unconfigured bot here never loses an order; it just
  // means the admin finds out from the Admin Console instead of
  // instantly on their phone.
  async function notifyTelegram(order) {
    const token = window.TELEGRAM_BOT_TOKEN;
    const chatId = window.TELEGRAM_CHAT_ID;
    if (!token || !chatId || token.indexOf('PUT_YOUR_') === 0 || chatId.indexOf('PUT_YOUR_') === 0) {
      return; // Telegram not configured — order still lives in Firestore/Admin Console.
    }
    const lines = [
      '🆕 New order — WebLy',
      `Name: ${order.name}`,
    ];
    if (order.phone) lines.push(`Phone: ${order.phone}`);
    if (order.telegram) lines.push(`Telegram: ${order.telegram}`);
    if (order.budget) lines.push(`Budget: ${order.budget} $`);
    lines.push(`Message: ${order.message}`);
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: lines.join('\n') }),
      });
    } catch (err) {
      console.error('Telegram notification failed (order is still saved):', err);
    }
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
    renderOrdersList();
    renderCards();
  }

  /* =========================================================
     SCROLL-REVEAL
     ---------------------------------------------------------
     One shared observer for the whole page. Each element is
     watched only until it reveals itself once, then dropped —
     so the ongoing cost is ~0 regardless of how long someone
     scrolls, which is what keeps this safe on 2GB-RAM phones.
  ========================================================= */
  let revealObserver = null;
  function getRevealObserver() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    return revealObserver;
  }
  function observeReveal(el) {
    if (!el) return;
    getRevealObserver().observe(el);
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
  const cancelEditBtn = document.getElementById('cancelEditBtn');

  const orderNameInput = document.getElementById('orderName');
  const orderBudgetInput = document.getElementById('orderBudget');
  const orderPhoneInput = document.getElementById('orderPhone');
  const orderTelegramInput = document.getElementById('orderTelegram');
  const orderMessageInput = document.getElementById('orderMessage');
  const orderSubmitBtn = document.getElementById('orderSubmitBtn');
  const orderNote = document.getElementById('orderNote');

  const ordersListItems = document.getElementById('ordersListItems');
  const ordersBadge = document.getElementById('ordersBadge');
  const ordersBadgeInline = document.getElementById('ordersBadgeInline');

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
     ---------------------------------------------------------
     The custom listbox (trigger button + option list) drives
     the real, visually-hidden <select id="langSelect">, so this
     is the only place that needs to know both exist.
  ========================================================= */
  const langTrigger = document.getElementById('langTrigger');
  const langList = document.getElementById('langList');
  const langCurrent = document.getElementById('langCurrent');
  const langOptions = langList ? Array.from(langList.querySelectorAll('.lang-switch__option')) : [];

  function closeLangList() {
    langList.classList.add('is-hidden');
    langTrigger.setAttribute('aria-expanded', 'false');
  }
  function openLangList() {
    langList.classList.remove('is-hidden');
    langTrigger.setAttribute('aria-expanded', 'true');
  }
  function syncLangUI(code) {
    const opt = langOptions.find((o) => o.getAttribute('data-lang') === code) || langOptions[0];
    if (!opt) return;
    langOptions.forEach((o) => {
      o.classList.toggle('is-selected', o === opt);
      o.setAttribute('aria-selected', o === opt ? 'true' : 'false');
    });
    langCurrent.textContent = opt.getAttribute('data-label');
  }
  function selectLang(code) {
    syncLangUI(code);
    langSelect.value = code;
    langSelect.dispatchEvent(new Event('change'));
  }

  langTrigger.addEventListener('click', () => {
    langList.classList.contains('is-hidden') ? openLangList() : closeLangList();
  });
  langOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      selectLang(opt.getAttribute('data-lang'));
      closeLangList();
      langTrigger.focus();
    });
  });
  document.addEventListener('click', (e) => {
    if (!document.getElementById('langSwitch').contains(e.target)) closeLangList();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLangList();
  });

  langSelect.value = state.lang;
  syncLangUI(state.lang);
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

  /* ---------------------------------------------------------
     EDIT MODE — clicking "Edit" on a published template loads
     it back into this same form instead of creating a new one.
  --------------------------------------------------------- */
  function enterEditMode(tpl) {
    editingTemplateId = tpl.id;
    siteTitleInput.value = tpl.title;
    sitePriceInput.value = tpl.price;
    codeHtml.value = tpl.html || '';
    codeCss.value = tpl.css || '';
    codeJs.value = tpl.js || '';

    // Jump to the HTML tab so the loaded code is visible right away.
    document.querySelectorAll('.editor-tab').forEach((b) => b.classList.remove('is-active'));
    document.querySelectorAll('.editor-pane').forEach((p) => p.classList.remove('is-active'));
    document.querySelector('.editor-tab[data-tab="html"]').classList.add('is-active');
    codeHtml.classList.add('is-active');

    publishBtn.textContent = t('admin.form.update');
    cancelEditBtn.classList.remove('is-hidden');
    siteTitleInput.closest('.console-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    siteTitleInput.focus();
  }

  function exitEditMode() {
    editingTemplateId = null;
    publishBtn.textContent = t('admin.form.publish');
    cancelEditBtn.classList.add('is-hidden');
    resetForm();
  }

  cancelEditBtn.addEventListener('click', exitEditMode);

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

    const isEditing = !!editingTemplateId;
    const existing = isEditing ? state.templates.find((tpl) => tpl.id === editingTemplateId) : null;

    const item = {
      id: isEditing ? editingTemplateId : 'tpl_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      title,
      price: Number(price),
      html,
      css,
      js,
      createdAt: existing ? existing.createdAt : Date.now(),
    };

    publishBtn.disabled = true;
    try {
      await saveTemplateRemote(item);
      // No need to touch state.templates or re-render here —
      // the Firestore onSnapshot listener does it for every
      // open tab/browser, including this one.
      publishNote.textContent = isEditing ? t('admin.form.updatedNote') : t('admin.form.publishedNote');
      publishNote.style.color = 'var(--accent-green)';
      publishNote.classList.add('is-visible');
      setTimeout(() => publishNote.classList.remove('is-visible'), 2500);

      if (isEditing) {
        // Stay right here in the admin console so the admin can
        // keep editing other templates without losing their place.
        exitEditMode();
      } else {
        resetForm();
        // Send the admin straight back to the main storefront so the
        // freshly published card (and its Live Preview / WhatsApp /
        // Telegram buttons) is right there, ready to test.
        setTimeout(() => { window.location.hash = '#/'; }, 900);
      }
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
     CUSTOM ORDER FORM (client-facing)
  ========================================================= */
  function showOrderNote(text, isError) {
    orderNote.textContent = text;
    orderNote.style.color = isError ? 'var(--accent-red)' : 'var(--accent-green)';
    orderNote.classList.add('is-visible');
    setTimeout(() => orderNote.classList.remove('is-visible'), 3200);
  }

  orderSubmitBtn.addEventListener('click', async () => {
    const name = orderNameInput.value.trim();
    const phone = orderPhoneInput.value.trim();
    const telegram = orderTelegramInput.value.trim();
    const budget = orderBudgetInput.value.trim();
    const message = orderMessageInput.value.trim();

    if (!name || (!phone && !telegram) || !message) {
      showOrderNote(t('order.errorFields'), true);
      return;
    }

    const order = {
      id: 'ord_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name,
      phone,
      telegram,
      budget: budget ? Number(budget) : null,
      message,
      status: 'new',
      createdAt: Date.now(),
    };

    orderSubmitBtn.disabled = true;
    try {
      // Saved to Firestore first — this is the source of truth and
      // is what the admin console always shows, Telegram or not.
      await createOrderRemote(order);
      notifyTelegram(order); // best-effort, never blocks the success message
      orderNameInput.value = '';
      orderBudgetInput.value = '';
      orderPhoneInput.value = '';
      orderTelegramInput.value = '';
      orderMessageInput.value = '';
      showOrderNote(t('order.success'), false);
    } catch (err) {
      console.error('Sending order failed:', err);
      showOrderNote(t('order.error'), true);
    } finally {
      orderSubmitBtn.disabled = false;
    }
  });
  [orderNameInput, orderPhoneInput, orderTelegramInput, orderBudgetInput].forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') orderSubmitBtn.click();
    });
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

      const actions = document.createElement('div');
      actions.style.display = 'flex';
      actions.style.gap = '8px';

      const editBtn = document.createElement('button');
      editBtn.className = 'manage-row__delete'; // reuses the same pill-button styling
      editBtn.style.color = 'var(--accent)';
      editBtn.textContent = t('admin.manage.edit');
      editBtn.addEventListener('click', () => enterEditMode(tpl));

      const delBtn = document.createElement('button');
      delBtn.className = 'manage-row__delete';
      delBtn.textContent = t('admin.manage.delete');
      delBtn.addEventListener('click', () => deleteTemplate(tpl.id));

      actions.appendChild(editBtn);
      actions.appendChild(delBtn);

      row.appendChild(info);
      row.appendChild(actions);
      manageListItems.appendChild(row);
    });
  }

  /* =========================================================
     RENDER: ORDERS LIST (admin) + notification badge
  ========================================================= */
  function formatOrderTime(ts) {
    try {
      return new Date(ts).toLocaleString(state.lang === 'ru' ? 'ru-RU' : state.lang === 'tj' ? 'ru-RU' : 'en-US', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
      });
    } catch (e) {
      return '';
    }
  }

  function updateOrdersBadge() {
    const count = state.orders.filter((o) => o.status !== 'handled').length;
    [ordersBadge, ordersBadgeInline].forEach((el) => {
      if (!el) return;
      el.textContent = String(count);
      el.classList.toggle('is-hidden', count === 0);
    });
  }

  function renderOrdersList() {
    updateOrdersBadge();
    if (!ordersListItems) return;
    ordersListItems.innerHTML = '';

    if (state.orders.length === 0) {
      const p = document.createElement('p');
      p.className = 'manage-list__empty';
      p.textContent = t('admin.orders.empty');
      ordersListItems.appendChild(p);
      return;
    }

    state.orders.forEach((order) => {
      const row = document.createElement('div');
      row.className = 'order-row' + (order.status === 'handled' ? ' is-handled' : ' is-new');

      const head = document.createElement('div');
      head.className = 'order-row__head';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'order-row__name';
      nameSpan.textContent = order.name;

      head.appendChild(nameSpan);

      if (order.phone) {
        const phoneSpan = document.createElement('span');
        phoneSpan.className = 'order-row__contact';
        phoneSpan.textContent = order.phone;
        head.appendChild(phoneSpan);
      }
      if (order.telegram) {
        const tgSpan = document.createElement('span');
        tgSpan.className = 'order-row__contact';
        tgSpan.textContent = order.telegram.charAt(0) === '@' ? order.telegram : '@' + order.telegram;
        head.appendChild(tgSpan);
      }
      if (order.budget) {
        const budgetSpan = document.createElement('span');
        budgetSpan.className = 'order-row__budget';
        budgetSpan.textContent = order.budget + ' ' + t('card.currency');
        head.appendChild(budgetSpan);
      }

      const timeSpan = document.createElement('span');
      timeSpan.className = 'order-row__time';
      timeSpan.textContent = formatOrderTime(order.createdAt);
      head.appendChild(timeSpan);

      const messageP = document.createElement('p');
      messageP.className = 'order-row__message';
      messageP.textContent = order.message;

      const actions = document.createElement('div');
      actions.className = 'order-row__actions';

      if (order.status !== 'handled') {
        const handleBtn = document.createElement('button');
        handleBtn.className = 'order-row__handle';
        handleBtn.textContent = t('admin.orders.handle');
        handleBtn.addEventListener('click', async () => {
          handleBtn.disabled = true;
          try {
            await setOrderHandledRemote(order.id);
          } catch (err) {
            console.error('Marking order handled failed:', err);
            handleBtn.disabled = false;
          }
        });
        actions.appendChild(handleBtn);
      }

      const delBtn = document.createElement('button');
      delBtn.className = 'order-row__delete';
      delBtn.textContent = t('admin.orders.delete');
      delBtn.addEventListener('click', async () => {
        delBtn.disabled = true;
        try {
          await deleteOrderRemote(order.id);
        } catch (err) {
          console.error('Deleting order failed:', err);
          delBtn.disabled = false;
        }
      });
      actions.appendChild(delBtn);

      row.appendChild(head);
      row.appendChild(messageP);
      row.appendChild(actions);
      ordersListItems.appendChild(row);
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
<!-- Locks this preview into its own sealed box: without this,
     any relative link/src/url() inside the template's own
     HTML/CSS/JS (e.g. href="style.css", url(logo.png)) would
     resolve against the REAL WebLy site's URL — silently
     pulling in the real site's stylesheet/scripts/images and
     making the preview look "like the main site". Pointing the
     base at a domain that can never exist means every relative
     reference just fails to load instead, so nothing from
     outside this iframe can ever leak in. -->
<base href="https://sandboxed-preview.invalid/">
<style>html,body{margin:0;padding:0;}${tpl.css || ''}</style>
</head>
<body>
${tpl.html || ''}
<script>
// Keep this preview fully self-contained. Without this, a link like
// href="#menu" resolves against the REAL site's URL (a quirk of
// srcdoc iframes) and ends up loading the actual marketplace page
// inside the preview. So: in-page anchors just scroll within the
// preview itself, and every other link is inert — a preview should
// never navigate anywhere, including back out to the real site.
(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href]') : null;
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (href.charAt(0) === '#' && href.length > 1) {
      var target = document.getElementById(href.slice(1));
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    e.preventDefault();
  }, true);
})();
<\/script>
<script>${tpl.js || ''}<\/script>
</body>
</html>`;
  }

  /* ---------------------------------------------------------
     Card rendering is diff-based on purpose: every card holds a
     live iframe running the template's own HTML/CSS/JS, and
     those are the single heaviest thing on this page. Wiping
     and rebuilding the whole grid (the old behavior) meant that
     ANY change — a new order arriving, contact info being
     saved, even just switching language — reloaded every single
     mini-preview at once, which is what made things freeze up
     on older/weaker phones. Instead:
       - existing cards are reused (moved, not recreated) when
         their template hasn't actually changed
       - a card's iframe only gets its srcdoc set once it
         actually scrolls near the viewport (IntersectionObserver)
       - only a template that was genuinely edited gets its
         iframe content refreshed
  --------------------------------------------------------- */
  const cardElements = new Map(); // tpl.id -> { el, signature }
  let thumbObserver = null;

  function templateSignature(tpl) {
    return [tpl.title, tpl.price, tpl.html, tpl.css, tpl.js].join('\u0001');
  }

  function getThumbObserver() {
    if (!thumbObserver) {
      thumbObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const iframe = entry.target;
          if (iframe.__tpl) {
            iframe.srcdoc = buildTemplateDoc(iframe.__tpl);
            iframe.classList.add('is-loaded');
          }
          thumbObserver.unobserve(iframe);
        });
      }, { rootMargin: '300px 0px', threshold: 0.01 });
    }
    return thumbObserver;
  }

  function buildCardMarkup() {
    const card = document.createElement('article');
    card.className = 'card reveal';
    card.innerHTML = `
      <div class="card__thumb" data-action="thumb" role="button" tabindex="0" aria-label="${t('card.preview')}">
        <div class="card__thumb-frame-wrap">
          <iframe class="card__thumb-frame" sandbox="allow-scripts" referrerpolicy="no-referrer" tabindex="-1" aria-hidden="true" loading="lazy"></iframe>
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

    // Bound once at creation; reads card.__tpl at click-time so
    // later in-place updates (see updateCardContent) are picked up
    // without ever re-attaching listeners.
    const thumb = card.querySelector('[data-action="thumb"]');
    thumb.addEventListener('click', () => openPreview(card.__tpl));
    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPreview(card.__tpl); }
    });
    card.querySelector('[data-action="preview"]').addEventListener('click', () => openPreview(card.__tpl));

    return card;
  }

  function updateCardLinks(card, tpl) {
    const waLink = card.querySelector('[data-action="whatsapp"]');
    const tgLink = card.querySelector('[data-action="telegram"]');

    if (state.contact.whatsapp) {
      waLink.href = buildWhatsappUrl(tpl);
      waLink.onclick = null;
    } else {
      waLink.href = '#admin-panel';
      waLink.onclick = (e) => { e.preventDefault(); alert(t('card.noContactWhatsapp')); };
    }

    if (state.contact.telegram) {
      tgLink.href = buildTelegramUrl();
      tgLink.onclick = null;
    } else {
      tgLink.href = '#admin-panel';
      tgLink.onclick = (e) => { e.preventDefault(); alert(t('card.noContactTelegram')); };
    }
  }

  function updateCardContent(card, tpl, signatureChanged) {
    card.__tpl = tpl;
    card.querySelector('.card__title').textContent = tpl.title;
    card.querySelector('.card__price').textContent = `${t('card.priceLabel')}: ${tpl.price} ${t('card.currency')}`;
    card.querySelector('[data-action="preview"]').textContent = t('card.preview');
    card.querySelector('[data-action="whatsapp"]').textContent = t('card.whatsapp');
    card.querySelector('[data-action="telegram"]').textContent = t('card.telegram');

    const iframe = card.querySelector('.card__thumb-frame');
    iframe.__tpl = tpl;
    if (signatureChanged && iframe.classList.contains('is-loaded')) {
      // Already-visible preview whose underlying template was
      // actually edited — refresh it directly instead of waiting
      // on the observer (which already fired once and won't again).
      iframe.srcdoc = buildTemplateDoc(tpl);
    }

    updateCardLinks(card, tpl);
  }

  function renderCards() {
    if (state.templates.length === 0) {
      emptyState.classList.remove('is-hidden');
      cardGrid.style.display = 'none';
      cardGrid.innerHTML = '';
      cardElements.forEach((entry) => { if (thumbObserver) thumbObserver.unobserve(entry.el.querySelector('.card__thumb-frame')); });
      cardElements.clear();
      return;
    }
    emptyState.classList.add('is-hidden');
    cardGrid.style.display = 'grid';

    const currentIds = new Set(state.templates.map((tpl) => tpl.id));

    // Drop cards for templates that no longer exist.
    cardElements.forEach((entry, id) => {
      if (!currentIds.has(id)) {
        const iframe = entry.el.querySelector('.card__thumb-frame');
        if (thumbObserver) thumbObserver.unobserve(iframe);
        entry.el.remove();
        cardElements.delete(id);
      }
    });

    state.templates.forEach((tpl) => {
      const signature = templateSignature(tpl);
      let entry = cardElements.get(tpl.id);

      if (!entry) {
        const el = buildCardMarkup();
        const iframe = el.querySelector('.card__thumb-frame');
        iframe.__tpl = tpl;
        getThumbObserver().observe(iframe); // srcdoc is set lazily, once it's near the viewport
        observeReveal(el);
        entry = { el, signature };
        cardElements.set(tpl.id, entry);
        updateCardContent(el, tpl, false);
      } else if (entry.signature !== signature) {
        updateCardContent(entry.el, tpl, true);
        entry.signature = signature;
      } else {
        // Unchanged template — still refresh links/labels (contact
        // info or language may have changed) but never touch the iframe.
        updateCardContent(entry.el, tpl, false);
      }

      // appendChild on a node already in this DOM just moves it —
      // it does not detach+reattach the iframe's browsing context,
      // so this reorders the grid without reloading any preview.
      cardGrid.appendChild(entry.el);
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
    unsubscribeFromOrders();
    loginUsername.value = '';
    loginPassword.value = '';
    window.location.hash = '#/';
  }

  function showAdminConsole() {
    adminLogin.classList.add('is-hidden');
    adminPanel.classList.remove('is-hidden');
    hydrateContactInputs();
    renderManageList();
    // Orders are only readable while signed in (see firebase-config.js
    // rules), so this is where the live listener actually starts.
    subscribeToOrders();
  }

  function showAdminLogin() {
    adminPanel.classList.add('is-hidden');
    adminLogin.classList.remove('is-hidden');
    loginError.classList.remove('is-visible');
    unsubscribeFromOrders();
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
    document.querySelectorAll('.reveal').forEach(observeReveal);
  }

  init();
})();