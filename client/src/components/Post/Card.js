import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utilitaires";
import LikeButton from "./LikeButton";
import { updatePost, updateStatus } from "../../actions/postAction";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn, MDBCard } from 'mdbreact';
import Popup from "reactjs-popup";
import { useContext } from "react";
import { UidContext } from "../UserIdConnect";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const uid = useContext(UidContext);
  

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  const valideReservation = () => {
    dispatch(updateStatus(post._id, post.message, "reservé", post.clientId));
  }

  const refuseReservation = () => {
    dispatch(updateStatus(post._id, post.message, "refusé", post.clientId));
  }

  const annuleReservation = () => {
    dispatch(updateStatus(post._id, post.message, "non_reservé"));
  }

  const status = () => {
    if (post.status === 'reservé') {
      return (<span style={{fontSize:'12px', backgroundColor:'#2ed573', borderRadius:"4px 8px"}}>Réservé</span>)
    } else if (post.status === 'attente') {
      return (
        <div>
          <span style={{fontSize:'12px', backgroundColor:'#25fde9', borderRadius:"4px 8px"}}>En attente</span>
          
          <form action="" onClick={valideReservation}>
            <button type="submit" >Valider</button>
          </form>
             
          {" "}
          <form action="" onClick={refuseReservation}>
            <button type="button" >Refuser</button>
          </form>
        </div>
        )
    } else if (post.status === 'annulé') {
      return (<span style={{fontSize:'12px', backgroundColor:'#ff9f1a', borderRadius:"4px 8px"}}>Annulé</span>)
    } else if (post.status === 'non_reservé') {
      return (<span style={{fontSize:'12px', backgroundColor:'#ff9f1a', borderRadius:"4px 8px"}}>Non reservé</span>)
    } else if (post.status === 'refusé') {
      return (<span style={{fontSize:'12px', backgroundColor:'#ff9f1a', borderRadius:"4px 8px"}}>Non reservé (après refus)</span>)
    } 
  }

  const afficheReservButton = () =>
  {
      if (((userData.role !== 'propriétaire') && (post.status === "non_reservé")) || ((userData.role !== 'propriétaire') && (post.status === "refusé")) ) {
         return (
          <button type="submit" className="btn btn-light">
            <a style={{color:'#ff9f1a'}} href={`/reservation/${post._id}`}>
              Reserver 
            </a>
          </button>
        )
      } else if((userData.role !== 'propriétaire') && (post.clientId !== null) && (post.status === "attente")) {
          return (
            <div>
            <span style={{fontSize:'12px'}}>
              status : <span style={{backgroundColor:'#25fde9', borderRadius:"4px 8px"}}>En attente de validation</span>
            </span>
            <br/>
            <form action=""  onClick={() => {
              if (window.confirm("Voulez-vous annuler votre demande de reservation ?")) {
                annuleReservation();
              }
            }}
            >
              <button type="submit" titre="Annuler la reservation" >Annuler</button>
            </form>
          </div>
          )
      } else if((userData.role !== 'propriétaire') && (post.clientId !== null) && (post.status === "reservé")) {
        return (
          <div>
          <span style={{fontSize:'12px'}}>
            status : <span style={{backgroundColor:'#2ed573', borderRadius:"4px 8px"}}>Reservation acceptée &#128521;</span>
          </span>
        </div>
        )
    }  else if((userData.role !== 'propriétaire') && (post.clientId !== null) && (post.status === "refusé")) {
      return (
        <div>
        <span style={{fontSize:'12px'}}>
          status : <span style={{backgroundColor:'#ff4757', borderRadius:"4px 8px"}}>Refus</span>
        </span>
      </div>
      )
    } else if((userData.role !== 'propriétaire') && (post.clientId !== null) && (post.status === "annulé")) {
      return (
        <div>
        <span style={{fontSize:'12px'}}>
          status : <span style={{backgroundColor:'#ff4757', borderRadius:"4px 8px"}}>Votre reservation a été annulée</span>
        </span>
      </div>
      )
    } else if (userData.role === 'propriétaire'){
          return (
            <div>
              <span style={{fontSize:'12px'}}>
                status : {status()}
              </span>
            </div>
          )  
      }    
  }

  const ficheLocataire = () => {
    if ((post.clientId !== null) && (userData.role === 'propriétaire') ) {
      return (
              <Popup
                trigger={<i class="fas fa-address-card" title="fiche locataire"></i>}
                position={["bottom right"]}
                closeOnDocumentClick>
                <div>
                  {!isEmpty(usersData[0]) && 
                    usersData.map((user) => {
                        if (user._id === post.clientId) {
                          return (
                            <>
                              <p>
                                Pseudo : {user.pseudo} 
                                         {  (post.status === "reservé") &&
                                            <img src="./img/check.png"/>
                                         }
                                         {  (post.status === "refusé") &&
                                            <img src="./img/close.png"/>
                                         }
                                         {  (post.status === "attente") &&
                                            <img src="./img/Spinner.svg"/>
                                         }
                                         <br/>
                                {user.email} <br/> 
                                Tel :
                              </p>
                            </>
                          )
                        }
                    })
                  }
                </div>
              </Popup>
      
      )
    }
    
  }

  return (
    <div>
      <br />
      <MDBCard >
        <li className="container" key={post._id}>
          {isLoading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
              <>
                <div className="round">
                  <br />
                  <h6>
                    <img height="40" width="40" style={{ borderRadius: "50%" }}
                      src={
                        !isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === post.posterId) return user.picture;
                            else return null;
                          })
                          .join("")
                      }
                      alt="poster-pic"
                    />
                    {"  "}
                    {!isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user._id === post.posterId) return user.pseudo;
                          else return null;
                        })
                        .join("")}

                    <div className="col-sm" style={{textAlign:'right'}}>
                        <img src="./img/camera.png" title="Prise de vue locataire"/>
                        <br/>
                        {ficheLocataire()}
                    </div>
                  </h6>

                </div>
                <div>
                  <div>
                    <div>
                      <h4>{post.titre}</h4>
                      
                    </div>
                  </div>
                  <div className="row" >
                    <div className="col-sm">
                      {uid ? (
                        <a href={`/reservation/${post._id}`}>
                          {post.picture && (
                            <img height="200" width="200" src={post.picture} alt="card-pic" className="card-pic" />
                          )}
                          {post.video && (
                            <iframe
                              width="200"
                              height="200"
                              src={post.video}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={post._id}
                            ></iframe>
                          )}
                        </a>
                      ) : (
                        <>

                            {post.picture && (
                            <img height="200" src={post.picture} alt="card-pic" className="card-pic" />
                          )}
                          {post.video && (
                            <iframe
                              width="200"
                              height="200"
                              src={post.video}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={post._id}
                            ></iframe>
                          )}
                        </>
                      )}

                      



                      {isUpdated && (
                        <div className="update-post">
                          <textarea
                            defaultValue={post.message}
                            onChange={(e) => setTextUpdate(e.target.value)}
                          />
                          <div className="button-container">
                            <button className="btn" onClick={updateItem}>
                              Valider modification
                      </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-sm">
                      <span style={{fontSize:"12px", fontWeight:"bold"}}>Publiée le {dateParser(post.createdAt)}</span>
                      {isUpdated === false && <p>{post.message}</p>}
                    </div>
                  </div>


                  {userData._id === post.posterId && (
                    <div className="button-container">
                      <div onClick={() => setIsUpdated(!isUpdated)}>
                        <img height="40" src="./img/icons/document.svg" alt="edit" />
                      </div>
                      <DeleteCard id={post._id} />
                    </div>
                  )}
                  <div className="row">
                  <div className="col-sm">
                      <span style={{fontSize:'12px'}}>commentaire </span>
                          <i onClick={() => setShowComments(!showComments)} className="fas fa-comment"></i>  {post.comments.length}
                      
                  </div>
                    <div className="col-sm">
                      <LikeButton post={post} />
                    </div>
                    <div></div>
                    <div className="col-sm">
                      {uid === null && (
                        <Popup
                          trigger={<button type="submit" className="btn btn-light">
                            Reserver 
                            </button>}
                          position={["bottom center", "bottom right", "bottom left"]}
                          closeOnDocumentClick>
                          <div>Connectez-vous pour faire une reservation!</div>
                        </Popup>

                      )}
                      {uid && (
                       afficheReservButton()
                        )}
                      
                       
                    </div>

                  </div>
                  {showComments && <CardComments post={post} />}
                </div>
              </>
            )}
        </li>
      </MDBCard>

    </div>
  );
};

export default Card;
