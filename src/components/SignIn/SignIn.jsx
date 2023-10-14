import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase.config';


const SignIn = () => {
  const signInWinGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return <button onClick={signInWinGoogle}>Sign in with Google</button>;
};

export default SignIn;