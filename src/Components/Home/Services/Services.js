import React from 'react';
import weightLifting from '../../../images/young-fitness-man-studio.jpg'
import indoorCycling from '../../../images/indoorCycling.jpg';
import ketbellPower from '../../../images/ketbellPower.jpg';
import indoorCycling2 from '../../../images/indoorCycling2.jpg';
import boxing from '../../../images/boxing.jpg';


const Services = () => {
const textBrand = {
  color:'rgb(238, 99, 84)'
}
  return (
    <div className="bg-dark">
      <h5 className="text-center pt-5" style={textBrand}>OUR CLASSES</h5>
      <h1 className="text-center text-white pt-3">WHAT WE CAN OFFER</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-50">
      <img src={weightLifting} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title" style={textBrand}>STRENGTH</p>
        <h5 className="text-white">WEIGHTLIFTING</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-50">
      <img src={indoorCycling} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title" style={textBrand}>CARDIO</p>
        <h5 className="text-white">INDOOR CYCLING</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-50">
      <img src={ketbellPower} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title" style={textBrand}>STRENGTH</p>
        <h5 className="text-white">KETTLEBELL POWER</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-50">
      <img src={indoorCycling2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title" style={textBrand}>CARDIO</p>
        <h5 className="text-white">INDOOR CYCLING</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-50">
      <img src={boxing} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title" style={textBrand}>TRAINING</p>
        <h5 className="text-white">BOXING</h5>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;