import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header text-center">
          <h2>من نحن</h2>
          <p>تعرف على العابد ترافيل فرع سوهاج</p>
        </div>

        <div className="about-content glass">
          <div className="about-image">
            <img src="/logo.png" alt="العابد ترافيل فرع سوهاج" />
          </div>
          
          <div className="about-details">
            <h3 className="about-title">العابد ترافيل فرع سوهاج</h3>
            
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">إسم الشركة:</span>
                <span className="info-value">العابد ترافيل فرع سوهاج</span>
              </div>
              <div className="info-item">
                <span className="info-label">مدير فرع سوهاج:</span>
                <span className="info-value">أ/ احمد عبدالله محمد</span>
              </div>
              <div className="info-item">
                <span className="info-label">الفئة:</span>
                <span className="info-value">أ</span>
              </div>
              <div className="info-item">
                <span className="info-label">رقم الترخيص:</span>
                <span className="info-value">1617</span>
              </div>
              <div className="info-item">
                <span className="info-label">تاريخ الإنشاء:</span>
                <span className="info-value">1/1/2008</span>
              </div>
            </div>

            <div className="contact-info-card">
              <h4>معلومات التواصل المباشر</h4>
              <p><strong>العنوان:</strong> شارع المحطة بجوار بن راند وهريسة احمد حسنين</p>
              <p><strong>التليفون الأرضي:</strong> <a href="tel:0932135002" dir="ltr">0932135002</a></p>
              <p><strong>البريد الإلكتروني:</strong> <a href="mailto:alabedtravel888@gmail.com">alabedtravel888@gmail.com</a></p>
              
              <div className="mobile-numbers">
                <strong>أرقام الموبايل:</strong>
                <ul>
                  <li><a href="tel:01129992003" dir="ltr">01129992003</a></li>
                  <li><a href="tel:01004471647" dir="ltr">01004471647</a></li>
                  <li><a href="tel:01028633720" dir="ltr">01028633720</a></li>
                  <li><a href="tel:01140340704" dir="ltr">01140340704</a></li>
                  <li><a href="tel:01208214655" dir="ltr">01208214655</a></li>
                  <li><a href="tel:01147853601" dir="ltr">01147853601</a></li>
                  <li><a href="tel:01123185414" dir="ltr">01123185414</a></li>
                  <li><a href="tel:01557194205" dir="ltr">01557194205</a></li>
                  <li><a href="tel:01554800154" dir="ltr">01554800154</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3 className="map-title">📍 موقعنا على الخريطة</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.0061173262625!2d31.694373275845848!3d26.552071375495263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144f59e06c82872b%3A0xd4098d9c077f82cc!2z2LTYsdmD2Kkg2KfZhNi52KfYqNivINiq2LHYp9mB2YrZhCDZhNmE2LPZitin2K3YqSDYs9mI2YfYp9is!5e0!3m2!1sen!2seg!4v1777532962523!5m2!1sen!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع العابد ترافيل فرع سوهاج"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
