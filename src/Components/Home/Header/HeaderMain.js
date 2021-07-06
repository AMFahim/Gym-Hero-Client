import React from 'react';
import './HeaderMain.css';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
  return (
    <div className="header-container">
      <div className="card" style={{width: "40rem", background:"none"}}>
        <div className="card-body" style={{paddingTop:"250px", marginLeft:"10px"}}>
          <h6 className="card-title text-white">SHAPE YOUR BODY</h6>
          <h1 className="card-subtitle mb-2 text-muted display-1"><b className=" text-white">BE <span className="text-color">STRONG</span><br/>TRAINING HARD</b></h1>
          <Link to='/about'><button className="btn btn-warning">GET INFO</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;