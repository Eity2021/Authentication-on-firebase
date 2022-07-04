import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});




//   sign in
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const user = error.user;
        setUser(user);
      });
  };
  
//   show sign out button
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, [])

  //signout
  const signOutWithGoogle = () =>{
    console.log('signout')
    signOut(auth)
    .then(result => {
        const user = result.user;
        setUser(user)
    })
    .catch(error => {
        const user = error.user;
        setUser(user);
    })
  }
  return { user, signInWithGoogle,signOutWithGoogle };
};

export default useFirebase;
