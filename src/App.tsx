import React from 'react'
import subcareLogo from './subcare-logo.png'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={subcareLogo} className="App-logo" alt="logo" height="128" />
        <p>
          화장실이 어디죠?
        </p>
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
    </div>
  );
}

export default App
