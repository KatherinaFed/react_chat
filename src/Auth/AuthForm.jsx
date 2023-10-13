import React, { useState } from 'react';
import {useAuthState} from  'react-firebase-hooks/auth'
import { auth } from '../firebase';

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";



const AuthForm = () => {
  const [user, setUser] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  };

  const signOut = () => {
    setUser(false);
  };

  return (
    <div>
      {!user ? (
        <button onClick={googleSignIn}>SignIn</button>
      ) : (
        <button onClick={signOut}>Logout</button>
      )}
      <button>Google</button>
    </div>
  );
};

export default AuthForm;
