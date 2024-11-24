import React, { useState } from 'react';
import './Header.css';
import Chart from '../Chart/chart'; 
import Portfolio from '../../Portfolio/Portfolio'; 
import profiticon from '../../assets/icons/profiticon.png';
import green from '../../assets/images/greenarrow.png';
import red from '../../assets/images/redarrow.png';
import buy from '../../assets/icons/buyicon.png';
import sell from '../../assets/icons/minusicon.png';
import deposite from '../../assets/icons/depositeicon.png';

const Header = () => {
  const [accountValue, setAccountValue] = useState(12000);

  const valueChange = accountValue - 12000;
  const percentageChange = (valueChange / 12000.23 * 134.64).toFixed(2);

  return (
    <div className='header-sec'>
        <h1 className='head-line'>Dashboard</h1>
        <div className="holdings">
            <h2 className='head2'>Account Holdings</h2>
            <h1 className='head3'>€ {accountValue.toFixed(2)}</h1>
            <h3 className='pl'><span style={{ color: valueChange >= 0 ? 'green' : 'red' }}>
                {percentageChange}%
              </span>
            </h3>
            <div className="plarrow">
                <img src={valueChange >= 0 ? green : red} alt="Change Arrow" className={valueChange >= 0 ? 'green' : 'red'} />
            </div>
            <h3 className="head4">
              <span style={{ color: valueChange >= 0 ? 'green' : 'red' }}>
                € {valueChange.toFixed(2)}
              </span>
            </h3>
            <div className='icons'>
                <div className="buy1"><img src={buy} alt="Buy" className='buy' /><h2>Buy</h2></div>
                <div className="sell1"><img src={sell} alt="Sell" className='sell' /><h2>Sell</h2></div>
                <div className="deposite1"><img src={deposite} alt="Deposite" className='deposite' /><h2>Deposite</h2></div>
            </div>
        </div>
        <Chart accountValue={accountValue} setAccountValue={setAccountValue} />
        <Portfolio accountValue={accountValue} setAccountValue={setAccountValue} /> {}
    </div>
  );
};

export default Header;
