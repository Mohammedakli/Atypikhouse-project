import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/signIn.css";
import SignInPic from "../img/signIn.webp"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import axios from 'axios';
import {useHistory} from "react-router-dom";


export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }
    
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const history = useHistory();

    const  handleSubmit= (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5001/api/user/login",{
            email: email,
            password: password})
        .then((res)=>{
            if(res){
                history.push("/Welcome")
            }
        })
        .catch((err)=>{alert(err.message)})
    }
  return (
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
                                    <h1 class="h4 font-weight-bold text-theme">Se connecter comme locataire</h1>
                                </div>

                                <h2 class="h5 mb-0">Bienvenue sur cette plateforme réservée pour les locataires</h2>
                                <p class="text-muted mt-2 mb-5">Veuillez entrer votre adresse mail et mot de passe</p>

                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Adresse mail</label>
                                        <input type="email"  class="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} value={email}  ></input>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Mot de passe</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password}  ></input>
                                    </div>
                                    <div>
                                        <button onClick={handleSubmit} type="submit" class="btn btn-theme" >Se connecter</button>
                                        <a href="#l" class="forgot-link float-right text-primary">mot de passe oublié?</a>
                                    </div>                                    
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-6 d-none d-lg-inline-block">
                        <img src = {SignInPic} style = {{width : 700, height : 700}}></img>
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                    
                                
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
            

            <p class="text-muted text-center mt-3 mb-0">vous n'avez pas un compte? <a href="/signUp" class="text-primary ml-1">Inscrivez-vous !</a></p>

           

        </div>
        
    </div>

</div>
<Footer></Footer>
</div>

  );
}
