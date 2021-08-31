import React from 'react';
import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="bg-green-900">
      <header className="App-header">
        <img src={logo} className="animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
