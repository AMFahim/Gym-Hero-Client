import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import ClassNames from './Components/ClassNames/ClassNames';
import OurService from './Components/OurService/OurService';
import Trainer from './Components/Home/Trainer/Trainer';
import { useState } from 'react';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login/Login';
import ContactUs from './Components/ContactUs/ContactUs';
import Clients from './Components/Dashboard/Clients/Clients';
import Registration from './Components/Registration/Registration/Registration';
import Review from './Components/User/Review/Review';
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import AddTrainer from './Components/Dashboard/AddTrainer/AddTrainer';


export const UserContext = createContext();


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
             <About/>
          </Route>
          <Route path="/classNames">
             <ClassNames/>
          </Route>
          <Route path="/services">
            <OurService/>
          </Route>
          <Route path="/team">
            <Trainer/>
          </Route>
          <Route path="/classNames">
            <ClassNames/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/contactUs">
            <ContactUs/>
          </Route>
          <Route path="/clients">
            <Clients/>
          </Route>
          <Route path="/addTrainer">
            <AddTrainer/>
          </Route>
          <PrivetRoute path="/registration">
            <Registration/>
          </PrivetRoute>
          <PrivetRoute path="/review">
            <Review/>
          </PrivetRoute>
          <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
};

export default App;