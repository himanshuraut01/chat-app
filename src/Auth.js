// src/Auth.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('User already exists.');
      } else {
        setError('Failed to sign up.');
      }
      console.error(error);
    }
  };

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError('Failed to log in.');
      console.error(error);
    }
  };

  const handleLogout = async () => {
    setError('');
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError('Failed to log out.');
      console.error(error);
    }
  };

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        {user ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Welcome, {user.email}</h2>
            <Link to='/welcome'>
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mb-3">Go to Yapper</button>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Please Sign Up or Log In</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              onClick={handleSignUp}
              className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 mb-2"
            >
              Sign Up
            </button>
            <button
              onClick={handleLogin}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
