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
// import Login from './Components/Login/Login/Login';
import Login from './Components/Login/Login/Login';
// import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

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
          <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
};

export default App;