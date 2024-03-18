import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtrjA6tZ09dyqLL6VnS5y5AQDjaNwaND8",
    authDomain: "after-me-c57f5.firebaseapp.com",
    projectId: "after-me-c57f5",
    storageBucket: "after-me-c57f5.appspot.com",
    messagingSenderId: "301597209735",
    appId: "1:301597209735:web:b4004e9c384060c1f8f422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
