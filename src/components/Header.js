import React, { Component } from 'react';
import logo from './../logo.svg';
//import './style.css';
//home contacts menu header sticky-footer about search
class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Site Template</h1>
        </header>
      </div>
    );
  }
}

export default Header;
