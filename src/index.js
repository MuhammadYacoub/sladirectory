// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css'; // إذا كنت تستخدم النسخة RTL من بوتستراب
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';  // استيراد الأنماط الشاملة
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registered:', registration);
    }).catch((registrationError) => {
      console.log('Service Worker registration failed:', registrationError);
    });
  });
}