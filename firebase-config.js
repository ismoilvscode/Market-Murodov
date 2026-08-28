/* =========================================================
   FIREBASE CONFIG
   ---------------------------------------------------------
   1. Go to https://console.firebase.google.com
   2. Create a project (or use an existing one)
   3. Add a "Web app" inside the project -> it will show you
      an object exactly like the one below. Copy your real
      values in here.

   4. FIRESTORE (stores templates, contact info, custom orders)
      Firestore Database -> Create database -> production mode.
      Then Firestore -> Rules -> paste this:

      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /templates/{id} {
            allow read: if true;
            allow write: if request.auth != null;
          }
          match /portfolio/{id} {
            allow read: if true;
            allow write: if request.auth != null;
          }
          match /settings/{id} {
            allow read: if true;
            allow write: if request.auth != null;
          }
          match /orders/{id} {
            allow create: if true;
            allow read, update, delete: if request.auth != null;
          }
        }
      }

      This means: anyone can browse the storefront/portfolio and
      submit a custom order (create only -- once sent, a visitor
      can't read, edit or delete it, and can't read anyone else's
      order either). Only someone signed in through Firebase
      Authentication (the admin) can publish/edit/delete
      templates or portfolio items, edit contact info, or
      read/manage the incoming orders list.

   5. AUTHENTICATION (only the admin can sign in)
      Authentication -> Sign-in method -> enable "Email/Password".
      Then Authentication -> Users -> "Add user" -> create ONE
      account with your own email + a strong password. That is
      now your admin login (used on the "Admin sign-in" screen).
      There is no public sign-up button anywhere in this app,
      so nobody else can create an account for themselves.

      Note: this replaces the old hardcoded username/password
      that used to live inside app.js -- that was visible to
      anyone who viewed the page source, which is why it's no
      longer used.

   6. TELEGRAM NOTIFICATIONS (custom orders -> your phone/PC/tablet)
      Every custom order a visitor submits is ALWAYS saved to
      Firestore and shows up live in Admin Console -> Orders, no
      matter what -- that part works with zero extra setup.
      Filling in the two values below additionally pings your
      Telegram the instant an order comes in, on any device
      where Telegram is signed in.

      a) In Telegram, message @BotFather -> send /newbot and
         follow the prompts. It gives you a token that looks
         like 123456789:AAExampleTokenGoesHere12345
      b) Open a chat with your new bot and send it any message
         (e.g. "hi") -- bots can't message you first.
      c) Message @userinfobot (or @getidsbot) to get YOUR
         numeric chat id, e.g. 987654321
      d) Paste both values into TELEGRAM_BOT_TOKEN and
         TELEGRAM_CHAT_ID below and reload the site.

      Note: this is a front-end-only app (no server), so this
      bot token is visible to anyone who views the page source
      -- same tradeoff as the Firebase config above. That's
      fine for a bot whose only job is pushing one message into
      your own chat, but don't reuse this bot for anything more
      sensitive.
========================================================= */

const firebaseConfig = {
  apiKey: "AIzaSyCA3PO2kXB5--uKpkelqNfCE3TzAxhhNOk",
  authDomain: "murodov-market.firebaseapp.com",
  projectId: "murodov-market",
  storageBucket: "murodov-market.firebasestorage.app",
  messagingSenderId: "337362585372",
  appId: "1:337362585372:web:3e634b78d7272c0a04dcd9",
};

firebase.initializeApp(firebaseConfig);

// Exposed globally so app.js can use them.
window.db = firebase.firestore();
window.auth = firebase.auth();

// Fill these in per step 6 above to get instant Telegram pings
// for every new custom order. Leave the placeholders as-is to
// skip Telegram -- orders still land in Admin Console -> Orders.
window.TELEGRAM_BOT_TOKEN = "8834540096:AAHFGn9nfqa4Eprp4E5fMps3Zr3X1b94eWM";
window.TELEGRAM_CHAT_ID = "8406121228";