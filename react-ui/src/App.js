import logo from './assets/img/logo.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

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
      <header className="App-header d-flex justify-content-start align-items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ravenswood</h1>
      </header>
    </div>
  );
}

export default App;
