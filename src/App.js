// src/App.js
import React from 'react';
import Auth from './Auth';
import './index.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/" element={<Auth />} />
    </Routes>
    </Router>
  );
}

export default App;
