import React, { useState } from 'react';
import './UpProjects.css';

const companies = [
  {
    name: 'Aurora Dynamics',
    price: '$10.00',
    estimatePrice: '~40%',
    futurePrice: '~$14.00',
    backgroundColor: 'rgb(0, 255, 217)',
    hoverDetails: 'Aurora Dynamics focuses on sustainable energy solutions with projected growth of 40% by 2026.',
    hoverColor: '#ff7043',
  },
  {
    name: 'EcoGlobal Ventures',
    price: '$14.00',
    estimatePrice: '~20%',
    futurePrice: '~$16.80',
    backgroundColor: 'rgb(0, 190, 235)',
    hoverDetails: 'EcoGlobal Ventures is a leader in green technology with a 20% increase projected by 2026.',
    hoverColor: '#ffee58',
  },
  {
    name: 'Nexus Energy',
    price: '$12.00',
    estimatePrice: '~36%',
    futurePrice: '~$16.32',
    backgroundColor: 'rgb(0, 205, 225)',
    hoverDetails: 'Nexus Energy specializes in renewable energy, forecasting a 36% growth by 2026.',
    hoverColor: '#ffb74d',
  },
];

const UpProjects = () => {
  const [hoveredCompany, setHoveredCompany] = useState(null);

  return (
    <div className="up-projects-container">
      <h2>Upcoming Projects</h2>
      <div className="bar-container">
        {companies.map((company, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{ backgroundColor: company.backgroundColor }}
            onMouseEnter={() => setHoveredCompany(company)}
            onMouseLeave={() => setHoveredCompany(null)}
          >
            <div className="estimate-price">{company.estimatePrice}</div>
            <div className="price">{company.price}</div>
            <div className="company-name">{company.name}</div>
          </div>
        ))}
      </div>

      {hoveredCompany && (
        <div className="hover-details">
          <p>{hoveredCompany.hoverDetails}</p>
        </div>
      )}
      <div className="color-index">
        <div className="grect"></div>
          <h5>: Estimate potential percentage gain till 2026</h5>
        </div>
        <div className="share-index">
          <div className="rcolor"></div><div className="ycolor"></div><div className="ocolor"></div>
          <h5>: Estimate share price at launch date</h5>
      </div>
      <div className="ipo">
        <h3>Pre-IPO-Reserve</h3>
      </div>
      
      
    </div>
  );
};

export default UpProjects;
