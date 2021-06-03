import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/signUp.css"
import SignUpPic from "../img/signUp.jpg"
import NavBar from "../components/navBar"
import Footer from "../components/footer";
import axios from 'axios';
import {useHistory} from "react-router-dom";

export default function Register() {
    const history = useHistory();
    const [name ,setName]= useState("")
    const [email ,setEmail]= useState("")
    const [tel ,setTel]= useState("")
    const [role ,setRole]= useState("")
    const [password ,setPassword]= useState("")
    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/api/user/register",{
            pseudo : name,
            email : email,
            tel : tel,
            password : password,
            role : role
        }).then((res)=>{
            if(res){
                history.push("/Welcome")
            }
        })
        .catch(err=>{console.log(err)})
    }
    

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
                                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} class="form-control" id="yourName" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Adresse mail</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} class="form-control" id="exampleInputEmail1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputTel1">Telephone</label>
                                        <input type="tel" onChange={(e) => setTel(e.target.value)} value={tel} class="form-control" id="exampleInputTel1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputRole1">Role</label>
                                        <input type="text" onChange={(e) => setRole(e.target.value)} value={role} class="form-control" id="exampleInputRole1" />
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Mot de passe</label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button onClick={register} type="submit" class="btn btn-theme">S'inscrire</button>
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