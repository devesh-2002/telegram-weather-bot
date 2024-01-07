// src/components/Login.js
import React from 'react';
import { auth } from '../firebaseConfig';

const Login = () => {
  const handleLogin = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      await auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
