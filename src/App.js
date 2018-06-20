import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import ItemView from './components/ItemView'
import About from './components/About'
import Header from './components/Header';
import Form from './components/Form';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Header title="Home Comp"/>
          </header>
          <div className="App-intro">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/item/:id' component={ItemView}/>
            <Route path='/about' component={About}/>
            <Route path='/form' component={Form} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
