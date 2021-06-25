import React from 'react';
import logo from '../../../images/navbarLogo.png'

const FooterPage = () => {
  return (
    <div>
      <div className="container">
          <div className="text-center">
            <img style={{height:'300px'}} src={logo} alt=""/>
            <h3 className="display-5 text-white"><b>GYM HERO</b></h3>
            </div>
        </div>
      </div>
  );
};

export default FooterPage;