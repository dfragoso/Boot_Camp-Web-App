import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Upload from './Upload'
import ReactGoogleSlides from "react-google-slides";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header displaytext="First Component Data"/>
        <header className="App-header">
          <h1 className="App-title">Welcome Tech Stars!</h1>
          <img src="./ultimate.png" alt="banner" width="1500" height="460">
          </img>
          <Upload displaytext="First Component Data"/>
          <ReactGoogleSlides
        width={640}
        height={480}
        slidesLink="https://docs.google.com/presentation/d/10IqzxmtzwBs6x_cXa2UP9Yf2gf11QdNrG-A_BfudUOI/edit?usp=sharing"
        slideDuration={5}
        showControls
        loop/>
        </header>
        
      </div>
);
  }
}
export default App;