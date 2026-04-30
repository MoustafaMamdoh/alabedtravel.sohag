import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'مكة المكرمة - عمرة',
      image: '/mecca.png',
      price: 'أفضل العروض'
    },
    {
      id: 2,
      title: 'شرم الشيخ',
      image: '/sharm.png',
      price: 'سياحة داخلية'
    },
    {
      id: 3,
      title: 'الغردقة',
      image: '/hurghada.png',
      price: 'عروض المصايف'
    },
    {
      id: 4,
      title: 'سهل حشيش',
      image: '/sahl.png',
      price: 'إقامة فاخرة'
    }
  ];

  const handleBookNow = (title) => {
    const whatsappNumber = '201004471647';
    const message = `مرحباً، أود الحجز والاستفسار عن باقة: ${title}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="section-header text-center">
          <h2>أشهر الوجهات السياحية</h2>
          <p>اكتشف أفضل العروض لأجمل الوجهات حول العالم</p>
        </div>

        <div className="destinations-grid">
          {destinations.map(dest => (
            <div className="destination-card" key={dest.id}>
              <div className="destination-img">
                <img src={dest.image} alt={dest.title} />
                <div className="destination-price">{dest.price}</div>
              </div>
              <div className="destination-info">
                <h3>{dest.title}</h3>
                <button 
                  className="btn btn-outline w-100"
                  onClick={() => handleBookNow(dest.title)}
                >
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
