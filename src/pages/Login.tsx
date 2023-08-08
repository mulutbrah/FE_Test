// src/components/Login.tsx

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here (e.g., send the credentials to the server)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container m-auto grid grid-cols-3 gap-4">
      <div className='p-6'>
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
        />

        <div className='mt-2'>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white rounded px-4 py-2 w-36 float-right"
          >
            Login
          </button>
        </div>
      </div>

      <div>
        BCKGROUND
      </div>      
    </div>
  );
};

export default LoginPage;