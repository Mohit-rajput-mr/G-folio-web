import React, { useState } from 'react';
import './Investop.css';

const Investop = () => {
  // State to keep track of investment type and percentage increase
  const [investmentType, setInvestmentType] = useState('Flexible');
  
  // Handle click on investment type headers
  const handleInvestmentTypeChange = (type) => {
    setInvestmentType(type);
  };

  return (
    <div className="investop-container">
        <div className="status">
          <h3>Investment Opportunities</h3>
          <h4 className={investmentType === 'Flexible' ? 'h4 active' : 'h4'} onClick={() => handleInvestmentTypeChange('Flexible')}>Flexible</h4>
          <h4 className={investmentType === 'Locked' ? 'h4 active' : 'h4'} onClick={() => handleInvestmentTypeChange('Locked')}>Locked</h4>
        </div>
     
      <div className="bars-container">
        <div className="bar1" onClick={() => console.log("Clicked Sunshine Solar Farms")}>
            <h3 className="company">Sunshine Solar Farms</h3>
            <h3 className="roii">ROI/Annum:</h3>
            <h3 className="percent">{investmentType === 'Flexible' ? '7%' : '12%'}</h3>
        </div>
        <br/>
        <div className="bar1" onClick={() => console.log("Clicked GreenHarvest Organic Co-op")}>
            <h3 className="company">GreenHarvest Organic Co-op</h3>
            <h3 className="roii">ROI/Annum:</h3>
            <h3 className="percent">{investmentType === 'Flexible' ? '12%' : '16%'}</h3>
        </div>
        <br/>
        <div className="bar1" onClick={() => console.log("Clicked EcoInnovate Tech Solutions")}>
            <h3 className="company">EcoInnovate Tech Solutions</h3>
            <h3 className="roii">ROI/Annum:</h3>
            <h3 className="percent">{investmentType === 'Flexible' ? '10%' : '13%'}</h3>
        </div>
      </div>
    </div>
  );
}

export default Investop;
