import React, { useState } from 'react';
import './EnvIndicator.css';

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('World');
  const countries = ['USA', 'India', 'China', 'Germany', 'Brazil', 'Canada'];

  return (

    <div className="idicators-section">

        <div className='indicator-container'>
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className='world'>
              <option value="World">World</option>
               {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
                ))}
            </select>
            <h2 className='aqi'> AQI:  <span className='aqi-rate'>  136</span></h2>
          </div>

    </div>
    
  
  );
};

export default CountryDropdown;
