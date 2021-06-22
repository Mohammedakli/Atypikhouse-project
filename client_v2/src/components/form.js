import "../styles/form.css"
import axios from "axios"
import React, {useState} from 'react'; 
import {useHistory} from "react-router-dom";


export default function Form (){
    const [file,setImage]= useState([]);
    const [imageName,setImageName]= useState('Choose a File');
    const [titre,setTitre]= useState('');
    const [departement,setDepart]= useState('');
    const [type,setType]= useState('');
    const [prix,setPrix]= useState('');
    const [lng,setLongitude]= useState('');
    const [lat,setLatitude]= useState('');
    const history = useHistory();
    const setimage = e => {
    
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          setImage(e.target.files[0]);
        }
      }
    const  handleSubmit=  (e) =>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('upload_preset','salehfakhir1');
        formdata.append("tags", `codeinfuse, medium, gist`);
        formdata.append("api_key", "538584613833421"); // Replace API key with your own Cloudinary key
         axios.post("https://api.cloudinary.com/v1_1/saleh-fakhir/image/upload", formdata,{
            headers: { "X-Requested-With": "XMLHttpRequest" },
        
         })
        .then((res)=>{
            const postinfo = {
            picture : res.data.public_id,
            message: "lalal",
            titre : titre,
            departement: departement,
            type : type,
            prix : prix,
            lng : lng ,
            lat : lat
            };
            axios.post("http://localhost:5001/api/post/", postinfo).then(res =>{if(res){
                history.push("/explore")
            }})
            
        })
        .catch((err)=>{alert(err.message)})}




    console.log(file);
    return (
        <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Créer un nouveau post !</h3>
            
            <div class="card-1">
                
                <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Titre<span class="text-danger"> *</span></label> <input onChange={(e) => setTitre(e.target.value)} value={titre} type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Département<span class="text-danger"> *</span></label> <input  onChange={(e) => setDepart(e.target.value)} value={departement}type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Type<span class="text-danger"> *</span></label> <input onChange={(e) => setType(e.target.value)} value={type} type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Prix<span class="text-danger"> *</span></label> <input onChange={(e) => setPrix(e.target.value)} value={prix} type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                        
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Longitude<span class="text-danger"> *</span></label> <input onChange={(e) => setLongitude(e.target.value)} value={lng} type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Latitude<span class="text-danger"> *</span></label> <input onChange={(e) => setLatitude(e.target.value)} value={lat} type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        
                        <div class="form-group col-12 flex-column d-flex"> <label class="custom-file-label" for="customFile">{imageName}</label>  <input onChange={setimage}  type="file" class="custom-file-input" id="customFile"/></div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="form-group col-sm-6"> <button onClick={handleSubmit} type="submit" class="btn-block btn-primary">Postez</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    )
}