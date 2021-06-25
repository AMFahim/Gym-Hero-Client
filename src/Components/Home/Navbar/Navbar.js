import React from 'react';
import './Navbar.css';
import navbarLogo from '../../../images/navbarLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{marginTop:"-20px"}} className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand">
      <img src={navbarLogo} alt=""  width="100" height="100" className="d-inline-block align-text-top ms-5"/>
      <h2 className="ms-4 text-white">GYM HERO</h2>
      </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page" ><h5>Home</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-white hover-effect"><h5>About Us</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/classNames" className="nav-link text-white"><h5>classNames</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link text-white"><h5>Services</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link text-white"><h5>Our Team</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/contactUs" className="nav-link text-white"><h5>Contact Us</h5></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;