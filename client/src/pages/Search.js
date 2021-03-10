import React, { useContext, useState } from "react";
import { UidContext } from "../components/UserIdConnect";
import LeftNav from "../components/LeftNav";
import SearchForm from "../components/Post/SearchForm";
import Thread from "../components/Thread";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';
import Navbar from "../components/Navbar"

const Search = () => {
  const uid = useContext(UidContext);
  const [state, setState] = useState({
    isSearching: false,
    active: "search",
    post: [{}, {}],
    query: ""
  });
  const onTextChange = input => {
    setState({ ...state, isSearching: input.length > 0 })
    console.log(input)
  }

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-1">
          <LeftNav />
        </div>
        <div className="col-11">

          <MDBContainer><bcomplexe r />
            <MDBRow>

              <MDBCol md="12">
                <MDBCard>
                  <MDBCardBody>
                    <form >
                      <p className="h4 text-center py-4">Veuillez entrer les détails de votre recherche</p>
                      <div className="grey-text">
                        
                        <br />

                        <div className="terms error"></div>
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn color="#ff9f1a" type="submit">
                          Valider la recherche
                            </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
    </>
  );
};

export default Search;
