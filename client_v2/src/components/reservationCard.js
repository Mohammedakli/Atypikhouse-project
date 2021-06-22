import "../styles/reservationCard.css"
import ParisPic from "../img/pic1.jpg"
import NewYorkPic from "../img/Pic2.jpg"
import SanFranciscoPic from "../img/Pic3.webp"
import React,{ useState , useEffect} from "react"
import axios from 'axios'
import { useLocation, useParams } from "react-router"
import {useHistory , Link} from "react-router-dom";
import {Image} from 'cloudinary-react';




export default function ReservationCard ({_id}){
    const history = useHistory();
    const [postDetails, setPosts]= useState([]);
    const {id} =useParams();
    const location = useLocation()
    useEffect( async () => {
        await axios.get(`http://localhost:5001/api/post/${id}`).then(res=>setPosts(res.data)).catch(err=>console.log(err));
    }, [id]);   
    
    
    return (
        <div class="container bootdey bg-1">
<div class="col-md-12">
<section class="panel">
      <div class="panel-body">
          <div class="col-md-12">
              <div class="pro-img-details">
                  <br></br>
                  
                  <Image alt="Opt alp thumbnail" cloudName='saleh-fakhir' publicId={postDetails.picture}/>
              </div>
            
          </div>
          <br></br>
              <br></br>
          <div class="col-md-12">
              <h4 class="pro-d-title">
                  <h1>
                      {postDetails.titre}
                  </h1>
              </h4>
              <p>
                 {postDetails.message}
              </p>
              
              <div class="m-bot15"> <strong>Price : </strong>  <span class="pro-price"> ${postDetails.prix}</span></div>
              <br></br>
              <br></br>
              <p>
              <Link to={{
            pathname: `/payment/${id}`,
            state: {
                fromNotification: true,
            },
        }}>
                  <button class="btn btn-round btn-danger"  type="button"><i class="fa fa-shopping-cart"></i> Réservez !</button>
              </Link>
              </p>
          </div>
      </div>
  </section>
  </div>
  </div>
 

    )
}