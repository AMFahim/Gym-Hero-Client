import React from 'react';
import { Link } from 'react-router-dom';

const Enroll = () => {
  return (
    <div className="bg-dark">
      <div className="text-center bg-dark">
        <h5 style={{ color: 'rgb(204, 67, 52)' }}>OUR PLAN</h5>
        <h4 className="display-6 text-white"><b>CHOOSE YOUR PRICING PLAN</b></h4>
      </div>
      <div style={{ height: '450px', marginTop: "50px" }} className="row row-cols-1 row-cols-md-3 g-4 bg-dark">
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark text-center">
              <h3 className="card-title text-white">Class drop-in</h3>
              <h1 className="display-2" style={{ color: 'rgb(204, 67, 52)' }}><b>$39.0</b></h1>
              <p className="text-white"><b>SINGLE CLASSES</b></p>
              <small className='text-white'>
                Free riding <br/>
                Unlimited equipments <br/>
                Personal trainer <br/>
                Weight losing classes <br/>
                Month to mouth <br/>
                No time restriction
           </small>
           <br/>
           <br/>
           <Link to='/login'><button className="btn btn-outline-danger">ENROLL NOW</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark text-center">
              <h3 className="card-title text-white">12 Month Unlimited</h3>
              <h1 className="display-2" style={{ color: 'rgb(204, 67, 52)' }}><b>$99.0</b></h1>
              <p className="text-white"><b>SINGLE CLASSES</b></p>
              <small className='text-white'>
                Free riding <br/>
                Unlimited equipments <br/>
                Personal trainer <br/>
                Weight losing classes <br/>
                Month to mouth <br/>
                No time restriction
           </small>
           <br/>
           <br/>
           <Link to='/login'><button className="btn btn-outline-danger">ENROLL NOW</button></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark text-center">
              <h3 className="card-title text-white">6 Month Unlimited</h3>
              <h1 className="display-2" style={{ color: 'rgb(204, 67, 52)' }}><b>$59.0</b></h1>
              <p className="text-white"><b>SINGLE CLASSES</b></p>
              <small className='text-white'>
                Free riding <br/>
                Unlimited equipments <br/>
                Personal trainer <br/>
                Weight losing classes <br/>
                Month to mouth <br/>
                No time restriction
           </small>
           <br/>
           <br/>
           <Link to='/login'><button className="btn btn-outline-danger">ENROLL NOW</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;