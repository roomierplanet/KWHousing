import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
    variant="dark"
    style={{marginRight: '3rem'}}
    onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;