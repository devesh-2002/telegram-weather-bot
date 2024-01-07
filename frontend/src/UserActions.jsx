// src/UserActions.js
import React, { useState } from 'react';
import axios from 'axios';

const UserActions = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleBlockUser = async () => {
    try {
      await axios.post(`http://localhost:3000/users/block/${userId}`);
      setMessage(`User ${userId} blocked successfully`);
    } catch (error) {
      setMessage(`Error blocking user: ${error.message}`);
    }
  };

  const handleUnblockUser = async () => {
    try {
      await axios.post(`http://localhost:3000/users/unblock/${userId}`);
      setMessage(`User ${userId} unblocked successfully`);
    } catch (error) {
      setMessage(`Error unblocking user: ${error.message}`);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      setMessage(`User ${userId} deleted successfully`);
    } catch (error) {
      setMessage(`Error deleting user: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Actions</h2>
      <label className="block mb-2">
        User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border rounded p-2"
        />
      </label>
      <button onClick={handleBlockUser} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">
        Block User
      </button>
      <button onClick={handleUnblockUser} className="bg-green-500 text-white px-4 py-2 mr-2 rounded">
        Unblock User
      </button>
      <button onClick={handleDeleteUser} className="bg-red-500 text-white px-4 py-2 rounded">
        Delete User
      </button>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
};

export default UserActions;
