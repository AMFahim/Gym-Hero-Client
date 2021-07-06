import React from 'react';
import weightLifting from '../../../images/young-fitness-man-studio.jpg'
import indoorCycling from '../../../images/indoorCycling.jpg';
import ketbellPower from '../../../images/ketbellPower.jpg';
import indoorCycling2 from '../../../images/indoorCycling2.jpg';
import boxing from '../../../images/boxing.jpg';
import ShowServices from './ShowServices';


const classes = [
  {
    image: weightLifting,
    classNames: "STRENGTH",
    material: "WEIGHTLIFTING"
  },
  {
    image: indoorCycling,
    classNames: "STRENGTH",
    material: "WEIGHTLIFTING"
  },
  {
    image: ketbellPower,
    classNames: "STRENGTH",
    material: "WEIGHTLIFTING"
  },
  {
    image: indoorCycling2,
    classNames: "STRENGTH",
    material: "WEIGHTLIFTING"
  },
  {
    image: boxing,
    classNames: "STRENGTH",
    material: "WEIGHTLIFTING"
  },
  {
    image: weightLifting,
    classNames: "STRENGTH",
    material: "WEIGHTLIFTING"
  },
]


const Services = () => {
  const textBrand = {
    color: 'rgb(238, 99, 84)'
  }
  return (
    <div className="bg-dark">
      <div>
        <h5 className="text-center pt-5" style={textBrand}>OUR CLASSES</h5>
        <h1 className="text-center text-white pt-3">WHAT WE CAN OFFER</h1>
      </div>
      <div className="row">
        {
          classes.map(cls => <ShowServices cls={cls}></ShowServices>)
        }

      </div>
    </div>
  );
};

export default Services;