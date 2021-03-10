import { MDBBtn } from "mdbreact";
import React, { useState } from "react";
import SignInProForm from "./SignInProForm";
import SignUpProForm from "./SignUpProForm";


const Index_pro = ( props ) => {
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
        
          <MDBBtn style={{ backgroundColor: '#ff9f1a', color:'white' }}
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >
             Nouveau propriétaire ? creer votre compte ici
          </MDBBtn>
          <br/>
          <br/>
          <MDBBtn style={{ backgroundColor: '#ff9f1a', color:'white' }}
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}
          >
            Déjà propriétaire chez vous ? connectez-vous ici
          </MDBBtn>
        
        {signUpModal && <SignUpProForm />}
        {signInModal && <SignInProForm />}
      </div>
  );
};

export default Index_pro;
