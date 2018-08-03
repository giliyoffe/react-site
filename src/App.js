import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Search from './components/Search.js';
import Menu from './components/Menu.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Menu />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
