import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/signUp.css"
import SignUpPic from "../img/signUp.jpg"
import NavBar from "../components/navBar"
import Footer from "../components/footer";

export default function Register() {

return(
    <div>
        <NavBar></NavBar>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
<div id="main-wrapper" class="container">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="mb-5">
                                    <h1 class="h4 font-weight-bold text-theme">S'inscrire comme locataire</h1>
                                </div>
                                <h4 class="h5 mb-0">Bienvenue dans cette plateforme réservée pour les locataires</h4>
                                <p class="text-muted mt-2 mb-5">Veuillez rentrer vos informations</p>
                                <form>
                                    <div class="form-group">
                                        <label for="yourName">Nom</label>
                                        <input type="text" class="form-control" id="yourName" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Adresse mail</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Mot de passe</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" class="btn btn-theme">S'inscrire</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 d-none d-lg-inline">
                            <img src = {SignUpPic} style = {{width : 700, height : 700}}></img>
                            <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            <p class="text-muted text-center mt-3 mb-0">Vous avez déjà un compte ? <a href="/signIn" class="text-primary ml-1">Connectez-vous !</a></p>
           
        </div>
        
    </div>
    
</div>
<Footer></Footer>
</div>
)}