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

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // منع الكروم من عرض الدعوة التلقائية
      e.preventDefault();
      // حفظ الحدث لاستخدامه لاحقا
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
    if (!deferredPrompt) return;

    // عرض الدعوة للتثبيت
    deferredPrompt.prompt();

    // تحديد ما إذا كان المستخدم قد قبل الدعوة
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    });
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
        {deferredPrompt && (
            <button id="addToHomeScreen" class="btn btn-primary" onClick={handleInstallClick} >إضافة إلى الشاشة الرئيسية</button>
        )}
      </Layout>
    </Router>
  );
}

export default App;
