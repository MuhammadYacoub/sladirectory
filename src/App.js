import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BranchList from './components/BranchList';
import HealthcareList from './components/HealthcareList';
import ConHC from './components/ConHC';
import ContactsList from './components/ContactsList';
import Layout from './layout/Layout';
import LoginModal from './components/LoginModal';
import HomePage from './components/HomePage';


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then((reg) => console.log('Service Worker: Registered (Pages)'))
          .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // تعديل هنا لتحديث حالة تسجيل الدخول بعد التحقق الناجح
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
            <Route path="/ConHC" element={<ConHC />} />
            <Route path="/contactslist" element={<ContactsList />} />
          </Routes>
        )}
      </Layout>
    </Router>
  );
}

export default App;
