import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import './MakeReview.css';

const MakeReview = () => {
  const {handleSubmit, register} = useForm();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  const onSubmit = data => {
    const clientFeedback = {
     comment: data.comment
    }
    fetch('https://pacific-wildwood-74021.herokuapp.com/addReview', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(clientFeedback)
    })
    .then(res => res.json())
    .then(added => {
      if(added){
        alert('Thanks for giving your feedback.')
        history.replace(from)
      }
    })
    
  }

  return (
    <div className="for-padding">
      <h5>Please give your honest feedback</h5>
      <form onSubmit={handleSubmit(onSubmit)} >
        <textarea className="comment text-light" placeholder="Write Here,,," cols="30" rows="10" {...register("comment")} required></textarea>
        <br />
        <input className="btn-style" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MakeReview;