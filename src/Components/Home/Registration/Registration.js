import React from 'react';
import pushUps from '../../../images/pushUps.jpg'

const Registration = () => {
  return (
    <div className="bg-dark pt-5">
      <div style={{color:'goldenrod'}} className="card bg-dark">
        <img style={{ height: '400px' }} src={pushUps} className="card-img" alt="..." />
        <div style={{ justifyContent: 'center', background:'rgba(0, 0, 0, 0.637)'}} className="card-img-overlay">
          <br />
          <br />
          <br />
          <br />
          <h1 className="card-title text-center">REGISTRATION NOW TO GET MORE DEALS</h1>
          <h3 className='text-center'>WHERE HEALTH, BEAUTY AND FITNESS MEET.</h3>
          <button style={{ justifyContent: 'center', marginLeft: '550px' }} className="btn btn-outline-warning text-center">APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;