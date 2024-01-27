/* firebase.js */
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";
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
 * @param {string} targetRole - The target role that the user is interested in
 * @param {boolean} isCompany - A boolean to check if the user is a company or not
 * @returns {Promise<UserCredential>} - A promise that resolves with a UserCredential object on success.
 */
const register = async (email, password, targetRole, isCompany) => {
    const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    if (isCompany) {
        await addCompany(email);
    } else {
        await addUser(email, targetRole);
    }
    return userCred;
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
const getUserDocument = async email => {
    try {
        const userDoc = await getDoc(doc(collection(db, "users"), email));
        if (!userDoc.exists()) {
            throw new Error("No such user!");
        }
        console.log("getUserDocument", userDoc);
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
const getUserTargetRole = async email => {
    try {
        const userDoc = await getUserDocument(email);
        const targetRole = userDoc.data().target_role;
        console.log("getUserTargetRole", targetRole);
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
const getUserSkills = async email => {
    try {
        const userDoc = await getUserDocument(email);
        const skills = userDoc.data().skills;
        console.log("getUserSkills", skills);
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
const getCompanyRoles = async email => {
    try {
        const companyRef = doc(db, "companies", email);
        const companyDoc = await getDoc(companyRef);
        if (companyDoc.exists()) {
            const roles = companyDoc.data().roles;
            console.log("roles", roles);
            return roles;
        } else {
            throw new Error("No such company!");
        }
    } catch (error) {
        console.log("Error fetching company roles", error.message);
    }
};

/**
 * Get all the associated skills (array of strings) with a role (in the roles collection) from firestore
 * @param {string} role - The role that the user is interested in
 * @returns {Promise<string[]>} - A promise that resolves with an array of strings on success.
 */
const getRoleSkills = async role => {
    try {
        const rolesRef = doc(db, "roles", role);
        const roleDoc = await getDoc(rolesRef);
        if (roleDoc.exists()) {
            const skills = roleDoc.data().skills;
            console.log("skills", skills);
            return skills;
        } else {
            throw new Error("No such role!");
        }
    } catch (error) {
        console.log("Error fetching role skills", error.message);
    }
};

// Now write operations for collections:

/**
 * Add a new user to firestore, with email as the document id
 * @param {string} email - The email of the user that he/she used to register
 * @param {string} targetRole - The target role that the user is interested in
 * @returns {Promise<array>} - A promise that resolves with an array of strings on success with associated skills.
 */
const addUser = async (email, targetRole) => {
    try {
        const userRef = doc(db, "users", email);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            const skills = await getRoleSkills(targetRole);
            await setDoc(userRef, {
                target_role: targetRole,
                skills: skills,
            });
            console.log("User added!");
            return skills;
        } else {
            throw new Error("User already exists!");
        }
    } catch (error) {
        console.log("Error adding user", error.message);
    }
};

/**
 * Add a new company to firestore, with email as the document id
 * @param {string} email - The email of the company that he/she used to register
 * @returns {Promise<void>} - A promise that resolves when the company is added.
 */
const addCompany = async email => {
    try {
        const companyRef = doc(db, "companies", email);
        const companyDoc = await getDoc(companyRef);
        if (!companyDoc.exists()) {
            await setDoc(companyRef, {
                roles: [],
            });
            console.log("Company added!");
        } else {
            throw new Error("Company already exists!");
        }
    } catch (error) {
        console.log("Error adding company", error.message);
    }
};

/**
 * Add a new role to the firestore collection "roles" when a company adds a new role via form
 * on the frontend. The role is also added to the company document in the "roles" array.
 * @param {string} email - The email of the company
 * @param {string} role - The role that the company wants to add
 * @param {string[]} skills - The skills associated with the role
 * @returns {Promise<boolean>} - A promise that resolves with a boolean true on success
 */
const addRole = async (email, role, skills) => {
    try {
        const roleRef = doc(db, "roles", role);
        const roleDoc = await getDoc(roleRef);
        if (!roleDoc.exists()) {
            await setDoc(roleRef, {
                skills: skills,
            });
            const companyRef = doc(db, "companies", email);
            const companyDoc = await getDoc(companyRef);
            await setDoc(companyRef, {
                roles: [...companyDoc.data().roles, role],
            });
            console.log("Role added!");
            return true;
        } else {
            throw new Error("Role already exists!");
        }
    } catch (error) {
        console.log("Error adding role", error.message);
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
    addUser,
    addCompany,
    addRole,
};
