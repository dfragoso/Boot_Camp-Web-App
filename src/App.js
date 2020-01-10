import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header displaytext="First Component Data"/>
        <header className="App-header">
          <h1 className="App-title">Welcome Tech Stars!</h1>
          <img src="./ultimate.png" alt="banner" width="1500" height="460">
          </img>
        </header>
        
        <p className="App-intro">
          Important Links:
        </p>
        <a href="https://sites.google.com/ultimatesoftware.com/devgrow/home">Dev Grow</a>
        
      </div>
);
  }
}
export default App;