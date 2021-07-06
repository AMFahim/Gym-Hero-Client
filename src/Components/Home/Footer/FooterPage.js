import React from 'react';
import logo from '../../../images/navbarLogo.png';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';





const FooterPage = () => {
  return (
    <div className="text-light">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">GYM HERO</h5>
            <div className="text-center">
            <img style={{height:'100px'}} src={logo} alt=""/>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <div>
            <h5 className="title">Please Give Your Feedback.</h5>
             <p>And Look, What Our Client Says</p>
            <Link to="/review"><button className="btn btn-outline-danger">Feedback</button></Link>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
                <a className="text-light" href="#!">+880153434345</a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">gymHero12@gmail.com</a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">Linked In</a>
              </li>
              <li className="list-unstyled">
                <a className="text-light" href="#!">Instagram</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a style={{textDecoration:'none'}} className="text-white" href=" https://gym-hero2.web.app/">A M Fahim</a>
        </MDBContainer>
      </div>
    </MDBFooter>
     
      </div>
  );
};

export default FooterPage;