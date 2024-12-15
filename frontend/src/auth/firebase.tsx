// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp58HruZ1Fzt6VoeA8s6I0Sd_YLblFDy8",
  authDomain: "rap-sheet-56518.firebaseapp.com",
  projectId: "rap-sheet-56518",
  storageBucket: "rap-sheet-56518.firebasestorage.app",
  messagingSenderId: "855658568902",
  appId: "1:855658568902:web:364c322a07a9ed9a240bc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error during sign-out:", error);
    throw error; // Optionally, rethrow the error for the caller to handle
  }
};

export { auth, signOutUser };
