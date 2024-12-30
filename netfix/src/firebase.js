// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAla8NX-HGNqG6FjOS-2QovXHFJxf3Ja_E",
  authDomain: "netflix-clone-814dc.firebaseapp.com",
  projectId: "netflix-clone-814dc",
  storageBucket: "netflix-clone-814dc.firebasestorage.app",
  messagingSenderId: "1059301204273",
  appId: "1:1059301204273:web:b6fb848e4e9622bfbe5010",
  measurementId: "G-879NE7B3D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup=async(name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }

}
const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log("Logged in user:", user);
      alert("Login successful!");
    } catch (error) {
      console.log("Login error:", error);
      alert(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      alert("You have been logged out!");
    } catch (error) {
      console.log("Logout error:", error);
      alert(error.message);
    }
  };

  export { auth, db, signup, login, logout };