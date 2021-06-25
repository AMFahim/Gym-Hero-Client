import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from '../Home/Navbar/Navbar';
import Services from '../Home/Services/Services';

const ClassNames = () => {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Services/>
    </div>
  );
};

export default ClassNames;