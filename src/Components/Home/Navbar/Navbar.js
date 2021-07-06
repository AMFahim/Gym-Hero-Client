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
          <Link to="/" className="nav-link active text-white" aria-current="page" ><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-white hover-effect"><b>About Us</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/classNames" className="nav-link text-white"><b>classes</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link text-white"><b>Services</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link text-white"><b>Our Team</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/contactUs" className="nav-link text-white"><b>Contact Us</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/review" className="nav-link text-white"><b>Review</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white"><button className="btn btn-outline-danger">Login</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;