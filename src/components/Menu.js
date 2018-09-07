import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>{/* id='menuUL' */}
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/about'>About</Link>
           </li>
           <li>
             <Link to='/contact'>Contact</Link>
           </li>
           <li>
             <Link to='/search'>Search</Link>
           </li>
         </ul>
      </div>
    );
  }
}

export default Menu;
