import React from 'react';
import './Portfolio.css';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const Portfolio = ({ display }) => {
  const data = [
    { name: 'Tesla', value: 400, sharePrice: 720.54, shares: 50 },
    { name: 'NextEra Energy', value: 300, sharePrice: 85.67, shares: 100 },
    { name: 'First Solar', value: 200, sharePrice: 112.98, shares: 30 },
    { name: 'Enphase Energy', value: 100, sharePrice: 175.00, shares: 20 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className={display ? 'portfolio-container flex ' : 'portfolio-container none'}>
      <div className='portfolio-name'>My Assets Chart</div>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={(entry) => `${entry.name} (${((entry.value / 1000) * 100).toFixed(0)}%)`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
        </PieChart>
      </ResponsiveContainer>
      <ul className='portfolio-ul'>
        {data.map((company, index) => (
          <li key={index} className='portfolio-li'>
            <div>
              <h2>{company.name}</h2>
              <div className='co-info'>
                <p>Share Price: ${company.sharePrice}</p>
                <p>Shares Held: {company.shares}</p>
                <p>Total Value: ${(company.sharePrice * company.shares).toFixed(2)}</p>
              </div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
