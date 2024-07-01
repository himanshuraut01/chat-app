import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import your Firebase configuration
import Chat from './components/Chat';

const style = {
  appContainer: 'max-w-[728px] mx-auto text-center',
  sectionContainer: 'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative overflow-auto',
  nav: 'bg-gray-800 h-20 flex justify-between items-center p-4',
  heading: 'text-white text-3xl',
  signOutButton: 'text-white px-4 py-2 rounded bg-red-500 hover:bg-red-600 cursor-pointer',
};

const Welcome = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user using Firebase auth
      // Redirect to another page after sign-out (example: to the home page)
      navigate('/')
      // Optionally, update state or perform other actions upon successful sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={style.appContainer}>
      <div className={style.sectionContainer}>
        <div className={style.nav}>
          <h1 className={style.heading}>Yapper</h1>
          <button className={style.signOutButton} onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
        <Chat/>
      </div>
    </div>
  );
};

export default Welcome;
