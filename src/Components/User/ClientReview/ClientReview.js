import React, { useEffect } from 'react';
import { useState } from 'react';
import ViewReview from '../ViewReview/ViewReview';

const ClientReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/reviews')
    .then(res => res.json())
    .then(data => setReview(data))
  }, [])

  return (
    <div>
       <h5>What Our Client Says</h5>
      {
        review.map(reviews => <ViewReview reviews={reviews}></ViewReview>)
      }
    </div>
  );
};

export default ClientReview;