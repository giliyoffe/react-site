import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

//import './App.css';
//home contacts menu header sticky-footer about search
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Footer />
      </div>
    );
  }
}

export default Home;
