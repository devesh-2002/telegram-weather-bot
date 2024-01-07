// src/UpdateApiKey.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateApiKey = () => {
  const [apiKey, setApiKey] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const updateApiKey = async () => {
    try {
      const response = await axios.post('http://localhost:3000/admin/api-key', { key: apiKey });
      console.log("Update API Key:", response);
      console.log('API Key updated successfully:', response.data);

      setUpdateMessage(`API Key updated successfully: ${response.data}`);
    } catch (error) {
      console.error('Error updating API key:', error.message);
      setUpdateMessage(`Error updating API key: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Update API Key</h2>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="border rounded p-2"
      />
      <button onClick={updateApiKey} className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
        Update API Key
      </button>

      {updateMessage && <p className={updateMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}>{updateMessage}</p>}
    </div>
  );
};

export default UpdateApiKey;
