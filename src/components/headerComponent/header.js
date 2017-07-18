import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Searchbar from '../search/searchbar';


class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          REACT Template
        </div>
        <nav>
          <ul>
            <li className='first'>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/Products'>Products</Link>
            </li>
            <li  className='last'>
            <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>


      <Searchbar />

      </header>
    );
  }
}

export default Header;
