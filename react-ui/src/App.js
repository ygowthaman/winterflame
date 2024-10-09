import logo from './assets/img/logo.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import SidePanel from './components/NavPanel/NavPanel';
import MainPanel from './components/MainPanel/MainPanel';
import NavPanel from './components/NavPanel/NavPanel';

function App() {

  const [items, setItems] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between align-items-center">
        <h1>Ravenswood</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <div className="row">
          <NavPanel />
          <MainPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
