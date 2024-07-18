// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BranchList from './components/BranchList';
import HealthcareList from './components/HealthcareList';
import Layout from './layout/Layout';
import LoginModal from './components/LoginModal';
import HomePage from './components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Layout>
        {!isLoggedIn && <LoginModal onLogin={handleLogin} />}
        {isLoggedIn && (
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/branches" element={<BranchList />} />
            <Route path="/healthcare" element={<HealthcareList />} />
          </Routes>
        )}
      </Layout>
    </Router>
  );
}

export default App;
