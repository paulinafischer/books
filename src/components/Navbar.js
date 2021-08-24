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
<<<<<<< HEAD
          <ul className="navList">

            <li className="nameNav" id="name">Paulina Fischer</li>
            <li><a className="navAnchor" href="#home">HOME</a></li>
            <li><a className="navAnchor" href="#books">BOOKS</a></li>
            <li><Link className="navAnchor" to="#contact">CONTACT</Link></li>
          </ul>
=======
            <ul className="navList">
                
                <li className="nameNav" id="name" >Paulina Fischer</li>
                <li><a className='navAnchor' href='#home'>HOME</a></li>
                <li><a className='navAnchor' href="#books">BOOKS</a></li>
                <li><a className='navAnchor' href='#contact'>CONTACT</a></li>
            </ul>
>>>>>>> b269b0c5b36cfb2cf689357493c76b737223b1c5
        </nav>
      </div>
      <Slider />
      <Books />
      <Footer />
    </div>

  );
}

export default Navbar;
