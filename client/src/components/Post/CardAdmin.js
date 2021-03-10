import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utilitaires";
import LikeButton from "./LikeButton";
import { updatePost } from "../../actions/postAction";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard } from 'mdbreact';
import Popup from "reactjs-popup";
import { useContext } from "react";
import { UidContext } from "../UserIdConnect";

const CardAdmin = ({ post }) => {
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
                                                    <img height="200" src={post.picture} alt="card-pic" className="card-pic" />
                                                )}
                                                {post.video && (
                                                    <iframe
                                                        width="365"
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
                                                        width="365"
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



                                <div className="row">
                                    <div className="col-sm">
                                        <span style={{fontSize:'12px'}}>commentaire </span>
                                            <i onClick={() => setShowComments(!showComments)} className="fas fa-comment"></i>  {post.comments.length}
                                        
                                    </div>
                                    <div className="col-sm">
                                    <span style={{fontSize:'12px'}}>j'aime </span>
                                        <i className="fas fa-star"></i>  {post.likers.length}
                                       
                                    </div>
                                    <div className="col-sm">
                                    <span style={{fontSize:'12px'}}>voir </span>
                                            <i className="fas fa-eye"></i>
                                       
                                    </div>
                                    <div className="col-sm">
                                        {(
                                            <div className="button-container">
                                                
                                                <DeleteCard id={post._id} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-sm">
                                    <span style={{fontSize:'12px'}}>status :</span>
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

export default CardAdmin;
