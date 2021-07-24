import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './AddTrainer.css';

const AddTrainer = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [photoURL, setPhotoURL] = useState(null);

  const onSubmit = data => {
    console.log(data)
    // const eventData =  {
    //   name: data.name,
    //   photoURL: photoURL
    // }
    // const url = `https://immense-thicket-20499.herokuapp.com/addTrainer`;
    // console.log(eventData)
    // fetch(url, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(eventData)
    // })
    // .then(res => console.log('adding new event', res))

  }

  const handlePhotoUpload = event => {
    console.log(event.target.files[0])
    const photoData = new FormData();
    photoData.set('key', '46ba524bf4d6daba591164d58506f874');
    photoData.append('photo', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', photoData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // const photoData = new FormData();
    // photoData.set('Key', '94a51f863defbefddf904f3af87d599c');
    // photoData.append('photo', event.target.files[0])
    
    // axios.post('https://api.imgbb.com/1/upload',
    //   photoData)
    //   .then(response =>  {
    //     setPhotoURL(response.data.data.display_url);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  //   axios.post('https://api.imgbb.com/1/upload',
  //   photoData)
  //   .then(function (response) {
  //     setPhotoURL(response.data.data.display_url);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  }

  return (
    <div className="container-fluid row">
      <div className="col-md-2">
         <Sidebar/>
      </div>
      <div className="col-md-10 pt-5">
        <h3 style={{color:"#7F8C8D "}}>Add A Trainer</h3>
        <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control formStyle" type="text" placeholder="Name" {...register("name")} /><br /> 
        <input className="form-control formStyle" type="file" onChange={handlePhotoUpload} /><br />
        <input className="btnStyle" type="submit" />
      </form>
      </div>
    </div>
  );
};

export default AddTrainer;