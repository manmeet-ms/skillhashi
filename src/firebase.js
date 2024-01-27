/* firebase.js */
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
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
const db = getFirestore(app); // Get the firestore service

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

// Firebase firestore helper functions

// Read operations for collections:

/**
 * Get a user document from firestore
 * @param {email} email - The email of the user that he/she used to register
 * @returns {Promise<DocumentSnapshot>} - A promise that resolves with a DocumentSnapshot object on success.
 */
const getUserDocument = email => {
    try {
        const userRef = collection(db, "users");
        const userDoc = userRef.doc(email).get();
        console.log("userDoc", userDoc);
        return userDoc;
    } catch (error) {
        console.log("Error fetching user document", error.message);
    }
};

/**
 * Get user target role (in the user document) from firestore
 * @param {email} email - The email of the user that he/she used to register
 * @returns {Promise<string>} - A promise that resolves with a string on success.
 */
const getUserTargetRole = email => {
    try {
        const userDoc = getUserDocument(email);
        const targetRole = userDoc.data().targetRole;
        console.log("targetRole", targetRole);
        return targetRole;
    } catch (error) {
        console.log("Error fetching user target role", error.message);
    }
};

/**
 * Get user skills (array of strings) (in the user document) from firestore
 * @param {email} email - The email of the user that he/she used to register
 * @returns {Promise<string[]>} - A promise that resolves with an array of strings on success.
 */
const getUserSkills = email => {
    try {
        const userDoc = getUserDocument(email);
        const skills = userDoc.data().skills;
        console.log("skills", skills);
        return skills;
    } catch (error) {
        console.log("Error fetching user skills", error.message);
    }
};

/**
 * Get company roles (array of strings) (in the company document) from firestore
 * @param {email} email - Similar to user document but with a different collection name. Only has roles and no skills.
 * @returns {Promise<string[]>} - A promise that resolves with an array of strings on success.
 */
const getCompanyRoles = email => {
    try {
        const companyRef = collection(db, "companies");
        const companyDoc = companyRef.doc(email).get();
        const roles = companyDoc.data().roles;
        console.log("roles", roles);
        return roles;
    } catch (error) {
        console.log("Error fetching company roles", error.message);
    }
};

/**
 * Get all the associated skills (array of strings) with a role (in the roles collection) from firestore
 * @param {string} role - The role that the user is interested in
 * @returns {Promise<string[]>} - A promise that resolves with an array of strings on success.
 */
const getRoleSkills = role => {
    try {
        const rolesRef = collection(db, "roles");
        const roleDoc = rolesRef.doc(role).get();
        const skills = roleDoc.data().skills;
        console.log("skills", skills);
        return skills;
    } catch (error) {
        console.log("Error fetching role skills", error.message);
    }
};

export {
    auth,
    register,
    login,
    resetPassword,
    logout,
    getUserDocument,
    getUserTargetRole,
    getUserSkills,
    getCompanyRoles,
    getRoleSkills,
};
