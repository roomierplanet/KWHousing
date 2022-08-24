import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import Button from 'react-bootstrap/Button';
import './ButtonStyles.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button 
    // variant="dark"
    className="auth0-button"
    onClick={() => logout({ returnTo: window.location.origin })}>
      <b><p>Log Out</p></b>
    </button>
  );
};

export default LogoutButton;