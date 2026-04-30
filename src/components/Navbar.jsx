import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar glass">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="/logo.png" alt="العابد ترافيل فرع سوهاج" className="logo-img" />
          </a>
        </div>
        <nav className="navbar-links">
          <a href="#home">الرئيسية</a>
          <a href="#services">خدماتنا</a>
          <a href="#destinations">الوجهات</a>
          <a href="#about">من نحن</a>
        </nav>
        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary">احجز الآن</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
