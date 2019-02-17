import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';
import 'typicons.font/src/font/typicons.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const NavBar = () => (
  <html>
  <head>
      <link rel='stylesheet' href='path/to/typicons.min.css' />
  </head>
  <body>
  <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/sell'}>Sell</Link></li>
      <li><Link to={'/buy'}>Buy</Link></li>
      <li><Link to={'/lend'}>Lend</Link></li>
      <li><Link to={'/profile'}>Profile</Link></li>
      <li><input className={"search"} type="text" placeholder="Search.." name="search"/><button className={"homeButton"} type="submit"><i className="fa fa-angle-double-right"/></button></li>
  </ul>
  </body>
  </html>
);

export default NavBar;