import React, { Component } from 'react';
import logo from './images/logo.svg';
import './CSS/App.css';
import Loginscreen from './Loginscreen';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello world <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
