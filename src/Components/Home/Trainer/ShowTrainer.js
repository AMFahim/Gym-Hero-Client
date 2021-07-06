import React from 'react';

const ShowTrainer = ({ trainer }) => {
  const textBrand = {
    color: 'rgb(238, 99, 84)'
  }
  return (
    <div className="col-md-4 p-5">
      <div className="card" style={{ width: "18rem", marginLeft: "40px", border: '1px solid gray' }}>
        <img src={trainer.image} className="card-img-top" alt="..." />
        <div className="card-body bg-dark">
          <h5 className="card-text text-center" style={textBrand}>{trainer.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ShowTrainer;