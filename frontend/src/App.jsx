// src/App.js
import React, { useEffect, useState } from 'react';
import firebaseConfig from './firebaseConfig';
import AllUsers from './AllUsers';
import UpdateApiKey from './components/UpdateApiKey';
import UserActions from './UserActions';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseConfig.auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new firebaseConfig.firebase.auth.GoogleAuthProvider();
      await firebaseConfig.auth.signInWithPopup(provider);
    } catch (error) {
      console.error('Google login error:', error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-4">Welcome, {user.displayName}!</p>
          <button
            onClick={() => firebaseConfig.auth.signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
          <AllUsers />
          <UserActions />
          <UpdateApiKey />
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-4">Please log in to access the admin panel.</p>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
