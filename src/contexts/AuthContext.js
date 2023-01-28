import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser] = useAuthState(auth);
  const addUserDB = async function (uuid, email, name) {
    await setDoc(doc(db, "users", uuid), {
      email: email,
      name: name,
    })
      .then((e) => console.log(e))
      .catch((e) => {
        console.log(e);
      });
  };
  const signup = async function (email, password, name) {
    await createUserWithEmailAndPassword(auth, email, password).then((e) => {
      updateProfile(e.user, { displayName: name });
      addUserDB(e.user.uid, email, name);
    });
  };
  const signin = async function (email, password) {
    await signInWithEmailAndPassword(auth, email, password).then((e) => {
      console.log(e);
    });
  };
  const signoutuser = async function () {
    await signOut(auth);
  };
  //   useEffect(() => {
  //     const unsub = auth.onAuthStateChanged((User) => {
  //       setCurrentUser(User);
  //     });
  //     return unsub;
  //   }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signoutuser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
