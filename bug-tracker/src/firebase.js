import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyA5o-kgKt3me4cyXre70cD2iuYDrv8Qxa8",
	authDomain: "bug-tracker-df9eb.firebaseapp.com",
	projectId: "bug-tracker-df9eb",
	storageBucket: "bug-tracker-df9eb.appspot.com",
	messagingSenderId: "427626769632",
	appId: "1:427626769632:web:2e489b32077b073409b485",
	measurementId: "G-05HTZSFYTY",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
	const res = await auth.signInWithPopup(googleProvider);
	const user = res.user;
	const query = await db.collection("users").where("uid", "==", user.uid).get();
	if (query.docs.length === 0) {
		await db.collection("users").add({
			uid: user.uid,
			name: user.displayName,
			authProvider: "google",
			email: user.email,
		});
	}
};

const signInWithEmailAndPassword = async (email, password) => {
	try {
		await auth.signInWithEmailAndPassword(email, password);
	} catch (err) {
		alert(err.message);
	}
};

const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await auth.createUserWithEmailAndPassword(email, password);
		const user = res.user;
		await db.collection("users").add({
			uid: user.uid,
			name,
			authProvider: "local",
			email,
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const sendPasswordResetEmail = async (email) => {
	try {
		await auth.sendPasswordResetEmail(email);
		alert("Password reset link sent!");
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = () => {
	auth.signOut();
};
export {
	provider,
	storage,
	auth,
	db,
	signInWithGoogle,
	signInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordResetEmail,
	logout,
};
