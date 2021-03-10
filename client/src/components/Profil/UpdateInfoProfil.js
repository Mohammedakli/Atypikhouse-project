import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useDispatch, useSelector } from "react-redux";
import UpdatePicture from "./UpdatePicture";
import { dateParser } from "../Utilitaires";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';


const UpdateInfoProfil = () => {
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.userError);

  

  const afficheLeftNav = () =>
  {
    if (userData.role === 'client') {
      return (
        <LeftNav />
      )
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          {afficheLeftNav()}
        </div>
        <br/>
        <div className="col-11">
          <MDBContainer><bcomplexe r />
            <MDBRow>

              <MDBCol md="12">
                <MDBCard>
                  <MDBCardBody>
                    <h1> Profil de {userData.pseudo}</h1>
                    <h6>Compte créé le : {dateParser(userData.createdAt)}</h6>
                    <div className="row">
                    <div className="col-6">
                      <ul>
                        <li>Pseudo: {userData.pseudo}</li>
                        <li>Email: {userData.email}</li>
                      </ul>
                    </div>
                      <div className="col-6">
                        <div className="left-part">
                          <h3>Photo de profil</h3>
                          <img height="400"
                            src={userData.picture} alt="user-pic" />
                          <UpdatePicture />
                          <p>{error.maxSize}</p>
                          <p>{error.format}</p>
                        </div>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        </div>
      </div>
  );
};

export default UpdateInfoProfil;
