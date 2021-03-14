import { MDBBtn } from "mdbreact";
import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";


const Log = ( props ) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
      <div className="container">
        <br/>
        <MDBBtn style={{ backgroundColor: '#ff7979', color:'white' }}
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >
            Nouveau ? creer votre compte ici
          </MDBBtn>
          <br/>
          <br/>
          <MDBBtn style={{ backgroundColor: '#ff7979', color:'white' }}
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}
          >
            Déja membre ? connectez-vous ici
          </MDBBtn>

        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
  );
};

export default Log;
