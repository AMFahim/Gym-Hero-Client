import React from 'react';
import { Nav } from 'react-bootstrap';
import FooterPage from '../Home/Footer/FooterPage';
import Navbar from '../Home/Navbar/Navbar';
import Services from '../Home/Services/Services';

const ClassNames = () => {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Services/>
      <FooterPage/>
    </div>
  );
};

export default ClassNames;