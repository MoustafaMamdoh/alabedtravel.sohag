import React, { useState } from 'react';
import Select from 'react-select';
import { airports } from '../data/airports';
import './Hero.css';

const Hero = () => {
  const [tripType, setTripType] = useState('one-way');
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  
  // Passengers State
  const [showPassengers, setShowPassengers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const totalPassengers = adults + children + infants;

  const handleSearch = () => {
    const whatsappNumber = '201004471647';
    
    let message = `مرحباً، أود الاستفسار عن رحلة طيران:\n`;
    message += `نوع الرحلة: ${tripType === 'one-way' ? 'ذهاب فقط' : 'ذهاب وعودة'}\n`;
    message += `من: ${from ? from.label : 'غير محدد'}\n`;
    message += `إلى: ${to ? to.label : 'غير محدد'}\n`;
    message += `تاريخ الذهاب: ${departureDate || 'غير محدد'}\n`;
    
    if (tripType === 'round-trip') {
      message += `تاريخ العودة: ${returnDate || 'غير محدد'}\n`;
    }
    
    message += `\nعدد المسافرين:\n`;
    message += `- بالغين: ${adults}\n`;
    if (children > 0) message += `- أطفال: ${children}\n`;
    if (infants > 0) message += `- رضع: ${infants}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  // Custom styles for react-select to match the design
  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: '5px',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      minHeight: '45px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#1694c9'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      textAlign: 'right',
      backgroundColor: state.isSelected ? '#1694c9' : state.isFocused ? '#f1f5f9' : 'white',
      color: state.isSelected ? 'white' : '#1e293b'
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999
    })
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">اكتشف العالم مع <span>العابد ترافيل فرع سوهاج</span></h1>
        <p className="hero-subtitle">
          أفضل عروض السياحة الداخلية للمصايف وحجوزات الطيران لجميع مطارات العالم.
        </p>
        
        <div className="advanced-search glass">
          
          <div className="trip-type-selector">
            <label className="radio-label">
              <input 
                type="radio" 
                name="tripType" 
                value="one-way" 
                checked={tripType === 'one-way'} 
                onChange={() => setTripType('one-way')}
              />
              <span>ذهاب فقط</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="tripType" 
                value="round-trip" 
                checked={tripType === 'round-trip'} 
                onChange={() => setTripType('round-trip')}
              />
              <span>ذهاب وعودة</span>
            </label>
          </div>

          <div className="search-grid">
            <div className="search-field">
              <label>من</label>
              <Select 
                options={airports}
                value={from}
                onChange={setFrom}
                placeholder="اختر مدينة أو مطار"
                styles={customStyles}
                isClearable
              />
            </div>
            
            <div className="search-field">
              <label>إلى</label>
              <Select 
                options={airports}
                value={to}
                onChange={setTo}
                placeholder="اختر مدينة أو مطار"
                styles={customStyles}
                isClearable
              />
            </div>

            <div className="search-field">
              <label>تاريخ المغادرة</label>
              <input 
                type="date" 
                className="custom-input"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>

            {tripType === 'round-trip' && (
              <div className="search-field">
                <label>تاريخ العودة</label>
                <input 
                  type="date" 
                  className="custom-input"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            )}

            <div className="search-field passenger-field">
              <label>المسافرون</label>
              <div 
                className="custom-input passenger-display" 
                onClick={() => setShowPassengers(!showPassengers)}
              >
                {totalPassengers} مسافر
              </div>
              
              {showPassengers && (
                <div className="passenger-dropdown">
                  <div className="passenger-row">
                    <div className="passenger-info">
                      <h4>بالغين</h4>
                      <p>+12 سنة</p>
                    </div>
                    <div className="passenger-controls">
                      <button onClick={() => adults > 1 && setAdults(adults - 1)}>-</button>
                      <span>{adults}</span>
                      <button onClick={() => setAdults(adults + 1)}>+</button>
                    </div>
                  </div>
                  <div className="passenger-row">
                    <div className="passenger-info">
                      <h4>أطفال</h4>
                      <p>2 - 12 سنة</p>
                    </div>
                    <div className="passenger-controls">
                      <button onClick={() => children > 0 && setChildren(children - 1)}>-</button>
                      <span>{children}</span>
                      <button onClick={() => setChildren(children + 1)}>+</button>
                    </div>
                  </div>
                  <div className="passenger-row">
                    <div className="passenger-info">
                      <h4>رضع</h4>
                      <p>أقل من سنتين</p>
                    </div>
                    <div className="passenger-controls">
                      <button onClick={() => infants > 0 && setInfants(infants - 1)}>-</button>
                      <span>{infants}</span>
                      <button onClick={() => setInfants(infants + 1)}>+</button>
                    </div>
                  </div>
                  <button className="btn btn-primary w-100 mt-3" onClick={() => setShowPassengers(false)}>
                    تأكيد
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="search-action">
            <button className="btn btn-primary search-btn-large" onClick={handleSearch}>
              البحث عن رحلات
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
