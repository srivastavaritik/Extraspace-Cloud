import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateEmail,
  updatePassword,
} from "firebase/auth";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function removeClassFromTag(element) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.toggle("dark-mode");
    }
  }

  const handleDarkMode = () => {
    //add dark-mode class to html tag
    document.documentElement.classList.toggle("dark-mode");

    //remove dark-mode class from all img and button tags
    let imgs = document.getElementsByTagName("img");
    let buttons = document.getElementsByTagName("button");
    removeClassFromTag(imgs);
    removeClassFromTag(buttons);
  };

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateUserEmail(email) {
    return updateEmail(auth, currentUser, email);
  }

  function updateUserPassword(password) {
    return updatePassword(auth, currentUser, password);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
    googleSignIn,
    handleDarkMode,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
