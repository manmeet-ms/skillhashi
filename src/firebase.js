/* firebase.js */
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwwZwyRtqPwb8ct2RJYAD6UMX3W1RAC5s",
    authDomain: "skillhashi.firebaseapp.com",
    projectId: "skillhashi",
    storageBucket: "skillhashi.appspot.com",
    messagingSenderId: "670265210877",
    appId: "1:670265210877:web:081b97a24eb32d312b0b94",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the authentication service

/**
 * Create a new user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>} - A promise that resolves with a UserCredential object on success.
 */
const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in an existing user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>} - A promise that resolves with a UserCredential object on success.
 */
const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Send a password reset email to the user
 * @param {string} email
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
};

/**
 * Sign out the current user
 * @returns {Promise<void>} - A promise that resolves when the user is signed out.
 */
const logout = () => {
    return signOut(auth);
};

export { auth, register, login, resetPassword, logout };
