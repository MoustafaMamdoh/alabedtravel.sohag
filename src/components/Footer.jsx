import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <img src="/logo.png" alt="العابد ترافيل" className="footer-logo-img" />
            <p>خيارك الأول لخدمات السفر والسياحة في سوهاج ومصر. نقدم لك أفضل العروض لرحلات الحج، العمرة، والطيران بأسعار لا تنافس.</p>
          </div>
          
          <div className="footer-links">
            <h3>روابط سريعة</h3>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#destinations">الوجهات</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>تواصل معنا</h3>
            <p>📍 شارع المحطة بجوار بن راند وهريسة احمد حسنين</p>
            <p>📞 0932135002 - 01004471647</p>
            <p>✉️ alabedtravel888@gmail.com</p>
            
            <div className="social-links">
              <a href="https://www.facebook.com/AlAbedTravel.Sohag" target="_blank" rel="noopener noreferrer" className="social-icon">
                Facebook
              </a>
              <a href="https://www.instagram.com/alabedtravel_sohag" target="_blank" rel="noopener noreferrer" className="social-icon">
                Instagram
              </a>
              <a href="https://tiktok.com/@alabedtravelsohag" target="_blank" rel="noopener noreferrer" className="social-icon">
                TikTok
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} شركة العابد ترافيل فرع سوهاج. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
