import React from 'react';
import './nav.css'
const NavBar = () => (
  <html>
  <ul>
    <li>Home</li>
    <li>Sell</li>
    <li>Buy</li>
    <li>Lend</li>
    <li>Profile</li>
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
  </ul>


  </html>
);

export default NavBar;