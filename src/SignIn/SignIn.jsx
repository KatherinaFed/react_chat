import React from 'react';
import firebase from 'firebase';


const SignIn = () => {
  const auth = firebase.auth();

  const signInWinGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

  }
  return (
    <button>Sign in with Google</button>
  );
};

export default SignIn;