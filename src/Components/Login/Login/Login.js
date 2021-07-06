import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
// import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
// import googleIcon from '../../../images/google.png';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



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

  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  var provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
         isSignIn: true,
         name: displayName, 
         email: email,
         photo: photoURL
        }
        setLoggedInUser(signedInUser);
        history.replace(from)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        console.log(errorCode, errorMessage, email);
      });


  }

  return (
    <div>
      <div style={{height:'700px', paddingTop:'200px'}} className="text-center bg-dark">
        <br />

        <button className="btn btn-outline-success p-2" onClick={handleGoogleSignIn}>
        <FontAwesomeIcon icon={faGoogle} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;