import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Services from '../Home/Services/Services';
import Trainer from '../Home/Trainer/Trainer';
import FooterPage from '../Home/Footer/FooterPage';

const About = () => {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Services/>
      <Trainer/>
      <FooterPage/>
    </div>
  );
};

export default About;