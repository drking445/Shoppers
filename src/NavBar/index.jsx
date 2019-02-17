import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';


const NavBar = () => (
  <html>
  <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/sell'}>Sell</Link></li>
      <li><Link to={'/buy'}>Buy</Link></li>
      <li><Link to={'/lend'}>Lend</Link></li>
      <li><Link to={'/profile'}>Profile</Link></li>
      <span className={"search"}>
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
      </span>
  </ul>


  </html>
);

export default NavBar;