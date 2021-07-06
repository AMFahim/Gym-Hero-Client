import React from 'react';
import trainer1 from '../../../images/trainer1.jpg';
import trainer2 from '../../../images/trainer2.jpg';
import trainer3 from '../../../images/trainer3.jpg';
import ShowTrainer from './ShowTrainer';

const trainers = [
  {
    image: trainer1,
    name: "Mandelina Mask"
  },
  {
    image: trainer2,
    name: "David"
  },
  {
    image: trainer3,
    name: "Rouf"
  }
]

const Trainer = () => {
  return (
    <div className="bg-dark pt-5">
      <div className="text-center">
        <h5 style={{ color: 'rgb(204, 67, 52)' }}>OUR TEAM</h5>
        <h4 className="text-white display-5"><b>TRAIN WITH EXPERTS</b></h4>
      </div>
      <div className="row">
        {
          trainers.map(trainer => <ShowTrainer trainer={trainer}></ShowTrainer>)
        }
      </div>
    </div>
  );
};

export default Trainer;