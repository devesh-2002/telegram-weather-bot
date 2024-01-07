// src/AllUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        console.log(response.data)
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <span className="font-bold">Telegram ID</span> <span className="font-bold">Preferred City</span>
      <ul>
        {users.map((user) => (
          <li key={user.uid} className="mb-2">
           
            <span className="">{user.telegramUserId}</span> {user.preferredCity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
