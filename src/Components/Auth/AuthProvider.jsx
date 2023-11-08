import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";




export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const userSingUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSingOut = () => {
    return signOut(auth);
  };

  // Keep The State True When User Belongs
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const sendingUser = { email: user?.email };
      setLoading(false);

      if (currentUser) {
        axios
          .post("http://localhost:5006/jwt", sendingUser, {
            withCredentials: true,
          })
          .then(() => {});
      } else {
        axios
          .post("http://localhost:5006/logout-jwt", sendingUser, {
            withCredentials: true,
          })
          .then(() => {});
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  const userInfo = {
    user,
    loading,
    userSingUp,
    userSingIn,
    googleLogin,
    userSingOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
