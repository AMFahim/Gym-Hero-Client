import React from 'react';

const ShowServices = ({ cls }) => {
  const textBrand = {
    color: 'rgb(238, 99, 84)'
  }
  return (
    <div className="col-md-4 p-3">
      <div className="card" style= {{width: "18rem", marginLeft: "40px", border:'1px solid gray'}}>
        <img src={cls.image} className="card-img-top" alt="..."/>
          <div className="card-body bg-dark">
            <p className="card-title" style={textBrand}>{cls.classNames}</p>
            <h5 className="card-text" style={textBrand}>{cls.material}</h5>
          </div>
      </div>
      </div>
      );
};

      export default ShowServices;