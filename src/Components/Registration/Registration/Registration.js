import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';
import RegistrationLogo from '../../../images/Registration.png';
import './Registration.css';

const Registration = () => {
 const {handleSubmit, register} = useForm();

  const onSubmit = data =>{
  const clientData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    age: data.age,
    weight: data.weight,
    gender: data.gender
  }

    fetch('http://localhost:5000/addRegistration', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(clientData)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('You Registration Successfully Done.')
      }
    })
  }
  return (
    <div className="container-fluid row">
      <div className="col-md-6">
        <img className="registration-logo pt-5" src={RegistrationLogo} alt="" />
      </div>
      <div className="col-md-6 pt-5 text-center">
       <div className="form-style p-3">
       <h1 className="text-center pb-3">Registration Now</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input className="box text-center" placeholder="Name" type="text" {...register("name")} required/><br />
          <br />
          <input className="box text-center" placeholder="Email" type="email" {...register("email")} required /><br />
          <br />
          <input className="box text-center" placeholder="Phone" type="tel" {...register("phone")} required/><br />
          <br />
          <input className="box text-center" placeholder="Age" type="number" {...register("age")} required /><br />
          <br />
          <input className="box text-center" placeholder="Current Weight" type="number" {...register("weight")} required /><br />
          <br />
          <select className="box text-light" {...register("gender")} required>
            <option className="text-center bg-dark" disabled={true} value="Not set">Select Gender</option>
            <option className="text-center bg-dark" value="Male">Male</option>
            <option className="text-center bg-dark" value="Female">Female</option>
            <option className="text-center bg-dark" value="Not set">Other</option>
          </select>
          <br /><br />
          <input className="submit-btn text-light" type="submit" value="Submit" />
        </form>
       </div>
      </div>
    </div>
  );
};

export default Registration;