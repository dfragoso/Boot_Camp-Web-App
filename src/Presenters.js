import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Presenters extends Component {
  render() {
    return (
      <div className="Presenters">
        <Header displaytext="First Component Data"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Presenters-title">Welcome to Presenters</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
);
  }
}
export default App;