import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header title="Home Comp"/>
        </header>
        <div className="App-intro">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
