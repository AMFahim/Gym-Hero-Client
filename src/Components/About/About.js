import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Services from '../Home/Services/Services';
import Trainer from '../Home/Trainer/Trainer';

const About = () => {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Services/>
      <Trainer/>
    </div>
  );
};

export default About;