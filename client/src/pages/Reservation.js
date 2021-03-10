import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { dateParser, isEmpty } from "../components/Utilitaires";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import ImageGallery from 'react-image-gallery';
import { MDBCard } from 'mdbreact';
import Navbar from "../components/Navbar";


const Reservation = (props) => {
  const posts = useSelector((state) => state.postReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);

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


  const match = useRouteMatch()

  useEffect(() => {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}api/post/${props.match.params.id}`)
        .then((res) => [
        ])
        .catch((err) => console.log(err));
    }
  }, [props])



  return (
    <>
    <Navbar />
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
          </StripeCheckout></div>
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
  );
};

export default Reservation
