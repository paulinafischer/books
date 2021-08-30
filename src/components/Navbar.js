import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Slider from './Slider';
import Books from './Books';
import Footer from './Footer';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <nav>
            <ul className="navList">
                
                <li className="nameNav" id="name" >Paulina Fischer</li>
                <li><a className='navAnchor' href='#home'>HOME</a></li>
                <li><a className='navAnchor' href="#books">BOOKS</a></li>
                <li><a className='navAnchor' href='#contact'>CONTACT</a></li>
            </ul>
        </nav>
      </div>
      <Slider />
      <Books />
      <Footer />
    </div>

  );
}

export default Navbar;
