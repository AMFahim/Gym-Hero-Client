import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
// import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
// import googleIcon from '../../images/google.png';
import { UserContext } from '../../../App';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  var provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setLoggedInUser(signedInUser);
        history.replace(from)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email);
      });


  }
  return (
    <div>
      <div style={{height:'700px'}} className="text-center bg-dark">
        <br />
        <button className="btn btn-outline-success" onClick={handleGoogleSignIn}>
         Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;