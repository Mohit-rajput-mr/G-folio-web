import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../../assets/logo.png';
import dashicon from '../../assets/icons/dashicon.png';
import porticon from '../../assets/icons/portflicon.png';
import transicon from '../../assets/icons/transacicon.png';
import insighsicon from '../../assets/icons/insightsicon.png';
import perfoicon from '../../assets/icons/perfoicon.png';
import marketicon from '../../assets/icons/marketicon.png';
import analicon from '../../assets/icons/analicon.png';
import newsicon from '../../assets/icons/newsicon.png';
import historyicon from '../../assets/icons/historyicon.png';
import settingicon from '../../assets/icons/settingicon.png';
import moonicon from '../../assets/icons/moonicon.png';
import toggle from '../../assets/icons/toggle.png';

const Menu = ({ setDisplayPortfolio }) => {  
  const [isMenuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => setMenuOpen(!isMenuOpen); // Toggle function

  return (
    <>
      {/* Menu Button for Mobile */}
      <button className="menu-btn" onClick={toggleMenu}>menu</button>

      {/* Sidebar Menu */}
      <div className={`menu-container ${isMenuOpen ? 'show-menu' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="G-Folio Logo" className='logo' />
        </div>
        <div className="menu-bar">
          <div className='menu1'>
            <ul>
              <li><Link to="/" onClick={() => setDisplayPortfolio(false)}><img src={dashicon} alt="Dashboard" className='dashicon'/>Dashboard</Link></li>
              <li><Link to="/portfolio" onClick={() => setDisplayPortfolio(true)}><img src={porticon} alt="Portfolio"/>Portfolio</Link></li>
              <li><Link to="/transaction"><img src={transicon} alt="Transaction"/>Transaction</Link></li>
              <li><Link to="/insight"><img src={insighsicon} alt="Insight"/>Insight</Link></li>
              <li><Link to="/performance"><img src={perfoicon} alt="Performance"/>Performance</Link></li>
            </ul>
          </div>
          <div className='menu2'>
            <ul>
              <li><Link to="/market"><img src={marketicon} alt="Market"/>Market</Link></li>
              <li><Link to="/analysis"><img src={analicon} alt="Analysis"/>Analysis</Link></li>
              <li><Link to="/news"><img src={newsicon} alt="News"/>News</Link></li>
            </ul>
          </div>
          <div className="menu3">
            <ul>
              <li><Link to="/history"><img src={historyicon} alt="History"/>History</Link></li>
              <li><Link to="/settings"><img src={settingicon} alt="Settings"/>Settings</Link></li>
            </ul>
          </div>
          <div className="darkmode">
            <li><Link to="/darkmode"><img src={moonicon} alt="Dark Mode"/>Dark Mode <img src={toggle} alt="Toggle Icon" /></Link></li>
          </div>
        </div>      
      </div>      
    </>
  );
}

export default Menu;
