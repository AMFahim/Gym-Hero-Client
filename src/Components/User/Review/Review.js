import React, { useEffect } from 'react';
import './Review.css';
import ReviewImg from '../../../images/ReviewImg.jpg'
import MakeReview from '../MakeReview/MakeReview';
// import { useState } from 'react';
// import ViewReview from '../ViewReview/ViewReview';
import ClientReview from '../ClientReview/ClientReview';
import Navbar from '../../Home/Navbar/Navbar';

const Review = () => {

  return (
    <div>
     <div style={{backgroundColor: '#2C3E50'}}>
     <Navbar/>
     </div>
      <div className="review-bg text-white text-center pt-3">
        <div className="container row">
          <div className="col-md-4">
            <ClientReview />
          </div>
          <div className="col-md-4 pt-2">
            <img className="reviewImg" src={ReviewImg} alt="" />
          </div>
          <div className="col-md-4 text-center">
            <MakeReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;