import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BranchList from './components/BranchList';
import HealthcareList from './components/HealthcareList';
import ConHC from './components/ConHC';
import ContactsList from './components/ContactsList';
import Layout from './layout/Layout';
import LoginModal from './components/LoginModal';
import HomePage from './components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(true); // إظهار الزر بشكل دائم

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    } else {
      alert("لإضافة التطبيق إلى الشاشة الرئيسية، افتح قائمة المشاركة (Share) واختر 'إضافة إلى الشاشة الرئيسية' (Add to Home Screen).");
    }
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

        {showInstallButton && (
          <button
            id="addToHomeScreen"
            className="btn btn-primary"
            onClick={handleInstallClick}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1000,
            }}
          >
            إضافة إلى الشاشة الرئيسية
          </button>
        )}
      </Layout>
    </Router>
  );
}

export default App;
