import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'حجز طيران',
      description: 'نوفر لك أفضل عروض تذاكر الطيران لجميع الوجهات العالمية وبأسعار تنافسية.',
      icon: '✈️'
    },
    {
      id: 2,
      title: 'سياحة داخلية',
      description: 'أجمل رحلات المصايف إلى الغردقة، شرم الشيخ، وسهل حشيش بأفضل الأسعار.',
      icon: '🏖️'
    },
    {
      id: 3,
      title: 'حج وعمرة',
      description: 'برامج متكاملة لرحلات الحج والعمرة مع توفير أفضل سبل الراحة للحجاج والمعتمرين.',
      icon: '🕋'
    },
    {
      id: 4,
      title: 'برامج سياحية',
      description: 'رحلات سياحية متكاملة تناسب العائلات والأفراد لاكتشاف أجمل المعالم.',
      icon: '🌍'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>خدماتنا المتميزة</h2>
          <p>نقدم لك باقة متكاملة من خدمات السفر والسياحة لتجربة لا تُنسى</p>
        </div>
        
        <div className="services-grid">
          {servicesList.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">المزيد من التفاصيل &larr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
