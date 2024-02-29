import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfO-Ro1_G5HM7sZDXl2hjJvBkllvVb1vM",
  authDomain: "safeservice-a3dad.firebaseapp.com",
  projectId: "safeservice-a3dad",
  storageBucket: "safeservice-a3dad.appspot.com",
  messagingSenderId: "807514699249",
  appId: "1:807514699249:web:0dbdcb23142b46069c0050",
  measurementId: "G-PDEXW83Z2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
