import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//home contacts menu header sticky-footer about search
class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/contact">Contact</Link>
           </li>
           <li>
             <Link to="/search">Search</Link>
           </li>
         </ul>
      </div>
    );
  }
}

export default Menu;
