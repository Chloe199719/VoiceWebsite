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
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser] = useAuthState(auth);
  const [faqDb, setFaqDb] = useState();
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

  // const readDatabase = async function () {
  //   const QuerySnapshot = await getDocs(collection(db, "faq"))
  //     .then((e) => {
  //       let temparr = [];
  //       e.docs.forEach((e, i) => {
  //         let tempobj = { ...e.data(), id: e.id };
  //         temparr.push(tempobj);
  //       });
  //       setFaqDb(temparr);
  //     })
  //     .catch((e) => {
  //       console.log(e, `error`);
  //     });

  // };
  //   useEffect(() => {
  //     const unsub = auth.onAuthStateChanged((User) => {
  //       setCurrentUser(User);
  //     });
  //     return unsub;
  //   }, []);
  useEffect(() => {
    const readDatabase = async function () {
      await getDocs(collection(db, "faq"))
        .then((e) => {
          let temparr = [];
          e.docs.forEach((e, i) => {
            let tempobj = { ...e.data(), id: e.id };
            temparr.push(tempobj);
          });
          setFaqDb(temparr);
        })
        .catch((e) => {
          console.log(e, `error`);
        });
    };
    readDatabase();
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signoutuser,
    faqDb,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
