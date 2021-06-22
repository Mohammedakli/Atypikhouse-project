import "../styles/exploreCards.css"
import React from "react"
import {Redirect, useHistory,Link} from "react-router-dom";
import Reservation from '../pages/reservation'
import {Image} from 'cloudinary-react';

 function ExploreCards({_id,image,message, titre ,prix }){
  
    return(
        
<div class="container">
<div class="row">
<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <div class="card card-small">
        <div class="thumbnail">           
                <Image alt="Opt alp thumbnail" cloudName='saleh-fakhir' publicId={image}/>
                <a href="#/product/awesome-landing-page">
                    <div class="thumb-cover"></div>
                </a>            
                <div class="details">
                <div class="user">
                     <div class="user-photo">
                          <img alt="Thumb" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                     </div>
                     <div class="name">User {_id}</div>
                </div> 
                <div class="numbers">
                        <b class="downloads"><i class="fa fa-arrow-circle-o-down"></i> 1124</b>
                    <b class="comments-icon"><i class="fa fa-comment"></i> 10</b>
                </div>
                <div class="clearfix"></div>
            </div>            
        </div>
        <div class="card-info">
            <div class="moving">
               <Link to={{
                   pathname: `/reservation/${_id}`,
                   state: {
                       fromNotification: true,
                   },
               }}>
                    <h3>{titre}</h3>
                    <p>{message}</p>
                    <p> price:{prix}</p>
               </Link>                
                <b class="actions">
                    <a href="" >Details</a>
                    <b class="separator">|</b>
                    <a class="blue-text" href="#/live/awesome-landing-page" target="_blank">Live Preview</a>
                </b>
            </div>
        </div>
    </div>
</div>
</div>
</div>
    )
}
export default ExploreCards