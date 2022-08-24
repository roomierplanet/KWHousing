import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from 'react-bootstrap';
import './ButtonStyles.css'

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <button 
  // variant="dark"
  className="auth0-button"
  
  onClick={() => loginWithPopup()}>
    <b><p>Log In</p></b>
  </button>;
  
};

export default LoginButton;