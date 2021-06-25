import React from 'react';
import Enroll from '../Enroll/Enroll';
import Feature from '../Feature/Feature';
import FooterPage from '../Footer/FooterPage';
import HeaderMain from '../Header/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';
import Trainer from '../Trainer/Trainer';


const Home = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <Navbar/>
      <HeaderMain/>
      <Feature/>
      <Services/>
      <Registration/>
      <Enroll/>
      <Trainer/>
      <FooterPage/>
    </div>
  );
};

export default Home;