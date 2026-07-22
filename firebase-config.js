/* =========================================================
   FIREBASE CONFIG
   ---------------------------------------------------------
   1. Go to https://console.firebase.google.com
   2. Create a project (or use an existing one)
   3. Add a "Web app" inside the project -> it will show you
      an object exactly like the one below. Copy your real
      values in here.

   4. FIRESTORE (stores templates + contact info)
      Firestore Database -> Create database -> production mode.
      Then Firestore -> Rules -> paste this:

      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /templates/{id} {
            allow read: if true;
            allow write: if request.auth != null;
          }
          match /settings/{id} {
            allow read: if true;
            allow write: if request.auth != null;
          }
        }
      }

      This means: anyone can browse the storefront, but only
      someone who has actually signed in through Firebase
      Authentication can publish, delete, or edit the contact
      info. Signed-out visitors can't write even if they open
      dev tools and try to call Firestore directly.

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