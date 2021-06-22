import React, { useState } from "react";
import "../styles/signIn.css";
import SignInPic from "../img/signIn.webp"
import NavBar from "../components/navBar"
import Footer from "../components/footer"
import {useHistory} from "react-router-dom";
import axios from 'axios';


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
        axios.post("http://localhost:5001/api/user/loginadmin",{
            email: email,
            password: password})
        .then((res)=>{
            if(res){
                history.push("/Welcome")
            }
        })
        .catch(function(error){
            console.log(error)
        })
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
          <br></br>
          <br></br>
    <div id="main-wrapper" class="container bg-1">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="mb-5">
                                    <h1 class="h4 font-weight-bold text-theme">Se connecter comme Administrateur</h1>
                                </div>

                                <h2 class="h5 mb-0">Bienvenue sur cette plateforme réservée pour nos Administrateurs</h2>
                                <p class="text-muted mt-2 mb-5">Veuillez entrer votre adresse mail et mot de passe</p>

                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Adresse mail</label>
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" class="form-control" id="exampleInputEmail1"/>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Mot de passe</label>
                                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div>
                                        <button  onClick={handleSubmit} type="submit" class="btn btn-theme" >Se connecter</button>
                                        <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a>
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
            

          

           

        </div>
        
    </div>

</div>
<Footer></Footer>
</div>

  );
}
