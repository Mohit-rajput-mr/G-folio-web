import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import SearchBar from './Components/Search/SearchBar';
import Header from './Components/Header/Header';
import Investop from './Components/Investment Opp/Investop';
import Sip from './Components/Sip/Sip';
import UpProjects from './Components/UpProjects/UpProjects';
import Portfolio from './Portfolio/Portfolio';
import EnvIndicator from './Components/EnvIndicator/EnvIndicator';

function App() {
  const [displayPortfolio, setDisplayPortfolio] = useState(false); 

  return (
    <Router>
      <div className="app-container">
        <Menu setDisplayPortfolio={setDisplayPortfolio} />
        <SearchBar />
        <EnvIndicator />
        <Routes>
          <Route path="/" element={
            <>
              <Header className="header" />
              <Investop className="investop" />
              <Sip className="sip" />
              <UpProjects className="up-projects" />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio display={displayPortfolio} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
