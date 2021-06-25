import React from 'react';
import mordenEqipment from '../../../images/mordenEqipment.png';
import healthyNutrition from '../../../images/healthyNutrition.png';
import proffesiponalTraining from '../../../images/professionalTraningPlan.png';
import uniqueNeeds from '../../../images/uniqueNeeds.png'
import FeatureCard from '../FeatureCard/FeatureCard';

const featureData = [
  {
    icon: mordenEqipment,
    name: "Modern equipment",
    description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquid mollitia eligendi iusto quasi eaque."
  },
  {
    icon: healthyNutrition,
    name: "Healthy nutrition plan",
    description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquid mollitia eligendi iusto quasi eaque."
  },
  {
    icon: proffesiponalTraining,
    name: "Proffesponal training plan",
    description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquid mollitia eligendi iusto quasi eaque."
  },
  {
    icon: uniqueNeeds,
    name: "Unique to your needs",
    description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquid mollitia eligendi iusto quasi eaque."
  }

]
const Feature = () => {
  return (
    <div className="row">
            <h5 className='text-center' style={{color:"rgb(204, 67, 52)", paddingTop:"110px"}}>WHY CHOSE US?</h5>
            <h2 className="text-center text-white" style={{backgroundColor:"black"}}>PUSH YOUR LIMITS FORWARD</h2>
      {
        featureData.map(feature => <FeatureCard feature={feature}></FeatureCard> )
      }
    </div>
  );
};

export default Feature;