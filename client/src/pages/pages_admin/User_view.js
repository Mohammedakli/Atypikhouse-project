import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../components/Utilitaires";



const User_view = (props) => {
    const usersData = useSelector((state) => state.usersReducer);
    return (
        <div >
            <nav style={{ backgroundColor: 'green' }}>
                <h3 style={{ color: 'white', fontFamily: 'fantasy', marginLeft: '20px', paddingTop: '20px' }}>AtypikHouse@Dashboard</h3>
            </nav>
            <div className="container">
                <MDBContainer><bcomplexe r />
                    <MDBRow>

                        <MDBCol md="12">
                            <MDBCard>
                                <MDBCardBody>
                                    {!isEmpty(usersData[0]) &&
                                        usersData.map((users) => {
                                            if (users._id === props.match.params.id) {
                                                return (
                                                    <>
                                                        <h1> Profil de {users.pseudo}</h1>
                                                        <h6>Compte crée le : {dateParser(users.createdAt)}</h6>
                                                        <div className="row">
                                                        <div className="col-6">
                                                        <ul>
                                                            <li>Pseudo: {users.pseudo}</li>
                                                            <li>Email: {users.email}</li>
                                                        </ul>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="left-part">
                                                            <h3>Photo de profil</h3>
                                                            <img height="400"
                                                                src={users.picture} alt="user-pic" />
                                                                {users.picture}
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </>
                                                )
                                                
                                            }
                                        })}

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    )
}

export default User_view;