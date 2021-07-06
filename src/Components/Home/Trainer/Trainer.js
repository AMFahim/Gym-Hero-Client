import React from 'react';
import trainer1 from '../../../images/trainer1.jpg';
import trainer2 from '../../../images/trainer2.jpg';
import trainer3 from '../../../images/trainer3.jpg';

const Trainer = () => {
  return (
    <div className="bg-dark pt-5">
     <div className="text-center">
       <h5 style={{color:'rgb(204, 67, 52)'}}>OUR TEAM</h5>
       <h4 className="text-white display-5"><b>TRAIN WITH EXPERTS</b></h4>
     </div>
      <div class="card-group pt-5">
  <div class="card">
    <img src={trainer1} class="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={trainer2} class="card-img-top" alt="..."/>
  </div>
  <div class="card">
    <img src={trainer3} class="card-img-top" alt="..."/>
  </div>
</div>
    </div>
  );
};

export default Trainer;