import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path='/' component={ Home }/>
          <Route path='/login' component={ Login }/>
          <Route path='/Register' component={ Register }/>       
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
