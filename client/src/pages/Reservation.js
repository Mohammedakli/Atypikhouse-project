import axios from "axios";
import React, { useEffect, useState } from "react";
import { dateParser, isEmpty } from "../components/Utilitaires";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import ImageGallery from 'react-image-gallery';
import { MDBBtn, MDBCard } from 'mdbreact';
import Navbar from "../components/Navbar";
import { updateStatus } from "../actions/postAction";

 
const Reservation = (props) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const posts = useSelector((state) => state.postReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const status = "attente"

  const confirmReservation = () => {
    {!isEmpty(posts[0]) &&
      posts.map((post) => {
        if (post._id === props.match.params.id) {
              dispatch(updateStatus(post._id, post.message, status, userData._id));
        }
      })
    }
    setFormSubmit(true);
  }

  
  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  const [post, setPost] = useState({
    name: "React from Me",
    price: posts.price,
  });
  /*
    const [Images, setImages] = useState([])
  
    useEffect(() => {
      {!isEmpty(posts[0]) &&
        posts.map((post) => {
          if (post._id === props.match.params.id) {
            if (post.picture.length > 0) {
              let images = [];
  
              post.picture.map((picture) => {
                images.push({
                  original: `http://localhost:5000/${picture}`,
                  thumbnail: `http://localhost:5000/${picture}`,
                })
              })
              setImages(images)
            }
          }
        })}
    }, [props.match.params.url])
  */
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  const makePayment = token => {
    const body = {
      token,
      post
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
    ).then(response => {
      console.log("RESPONSE", response)
      const { status } = response;
      console.log("STATUS", status)
    })
      .catch(error => console.log(error));
  }


  const infoPost = () => {}

 

  return (
    <>
    
    <Navbar />
    <div>
    {formSubmit ? (
                        <>
                        <h4 className="success" style={{textAlign:'center', paddingTop:'15%'}}>
                            Réservation réussite, elle est en attente de validation par le proprio !
                        </h4>
                        <div class="success-animation">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                        </div>
                        
                        <span></span>
                        </>
                    ) : (
                      <>
                          <div className="container">
                            <div className="row">
                              <div className="col-8">

                                <ul>
                                  {!isEmpty(posts[0]) &&
                                    posts.map((post) => {
                                      if (post._id === props.match.params.id) {
                                        return <div>
                                          {post.picture && (
                                            <img height="200" src={post.picture} alt="card-pic" className="card-pic" />
                                          )}
                                          <h6> {post.picture}</h6>
                                          {post.video && (
                                            <iframe
                                              width="100%"
                                              height="400"
                                              src={post.video}
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen
                                              title={post._id}
                                            ></iframe>
                                          )}
                                          <hr />
                                          <ImageGallery items={images} />
                                          <h3>{post.titre}</h3>
                                          <span>{post.superficie} - {post.localisation}</span>
                                          <h5>{post.price}</h5>
                                          <span>Publiée le {dateParser(post.createdAt)}</span>
                                          <hr />
                                          <h5>Détails</h5>
                                          <p>{post.message}</p>
                                          <hr />
                                          <h5>Cartographie</h5>
                                        </div>
                                      }
                                    })}
                                </ul>
                                <StripeCheckout
                                  stripeKey="pk_test_51IQafJDRHvU06AUoTyjd7f3g4TuEJI2wfvRwZxHKSuHQvfZE8J5Dy9GAgeNcH5oZoK6HDa1cYUFyaLKwis59tvRd00ZAf60pn1"
                                  token=""
                                  name="By Merith"
                                  amount={post.price * 10}
                                  shippingAddress
                                  billingAddress
                                >
                                  <button className="btn-large green">Payer </button>
                                </StripeCheckout>
                                <br/>
                               
                                  <MDBBtn type="button" onClick={confirmReservation}>
                                    Confirmer reservation
                                  </MDBBtn>
                                
                                
                                </div>
                              <div className="col-4">
                                <br />
                                <br />
                                <h5> Les informations du propriétaire</h5>
                                <div>
                                  <MDBCard>
                                    {!isEmpty(posts[0]) &&
                                      posts.map((post) => {
                                        if (post._id === props.match.params.id) {
                                          return <div>
                                            {!isEmpty(usersData[0]) &&
                                              usersData.map((user) => {
                                                if (post.posterId === user._id) {
                                                  return <div>
                                                    <br />
                                                          * Pseudo
                                                          <h3> {user.pseudo}</h3>
                                                          * Email
                                                          <h5> {user.email}</h5>
                                                          * Numéro de tel :
                                                      </div>
                                                }
                                              })}
                                          </div>
                                        }
                                      })}
                                  </MDBCard>
                                  {!isEmpty(posts[0]) &&
                                    posts.map((post) => {
                                      if (post._id === props.match.params.id) {
                                        return <div>
                                          {!isEmpty(usersData[0]) &&
                                            usersData.map((user) => {
                                              if (post.posterId === user._id) {
                                                return <div>
                                                  <a href={`/chat/${user._id}`}>
                                                    <button className="btn-large green">Lui laisser un message </button>
                                                  </a>
                                                </div>
                                              }
                                            })}
                                        </div>
                                      }
                                    })}

                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                   ) }
                    </div>
  </>
  );
};

export default Reservation
