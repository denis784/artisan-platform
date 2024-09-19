import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
import Login from './pages/Login';
// import RegisterPage from './pages/RegisterPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* App Container using flexbox */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <Header />

        {/* Main content */}
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* <Route path="/privacy" element={<PrivacyPolicyPage />} /> */}
          </Routes>
        </div>

        {/* Sticky Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
