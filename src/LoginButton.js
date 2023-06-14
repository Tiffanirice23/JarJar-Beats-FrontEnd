import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  <Button 
  onClick={() => loginWithRedirect()}
  className="loginBtn"
  style={{ margin: "30px" }}
  >
      Log In
    </Button>
  );
};

export default LoginButton;
