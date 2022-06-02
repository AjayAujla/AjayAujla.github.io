import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

const App = () => (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Stock Market Helper</p>
        <a className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer">
          Learn React
        </a>
      </header>

    </div>
);

export default App;
