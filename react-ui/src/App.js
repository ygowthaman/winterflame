import logo from './assets/img/logo.png';
import './App.css';
import MainPanel from './components/MainPanel/MainPanel';
import NavPanel from './components/NavPanel/NavPanel';

function App() {

  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between align-items-center">
        <h1 className="sm-view">RW</h1>
        <h1 className="lg-view">Ravenswood</h1>
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
