import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';


const NavBar = () => (
  <html>
  <ul>
      <Link to={'/'}><li>Home</li></Link>
      <Link to={'/sell'}><li>Sell</li></Link>
      <Link to={'/buy'}><li>Buy</li></Link>
    <li>Lend</li>
    <li>Profile</li>
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
  </ul>


  </html>
);

export default NavBar;