import React from 'react';

const FeatureCard = ({ feature }) => {
  return (
      <div className="col-md-3 text-center pt-5" style={{ backgroundColor: "black",paddingBottom:"100px" }}>
        <img style={{ height: "80px" }} src={feature.icon} alt="" />
        <h4 className="text-white">{feature.name}</h4>
        <p className="text-secondary">{feature.description}</p>
      </div>
  );
};

export default FeatureCard;