import NavBarUser from "../components/navBarUser"
import Footer from "../components/footer"
import ExploreCards from "../components/exploreCards"
import Caroussel from "../components/carroussel"
import React,{ useState , useEffect} from "react"
import axios from "axios"
import "../styles/explore.css"



export default function Explore (){
    const [post, setPosts]= useState([]);
  useEffect( async () => {
    await axios.get("http://localhost:5001/api/post/").then(res=>{
      setPosts(res.data)})
      .catch(err=>console.log(err));
}, []); 
   console.log(post)
    return(
        <div>
            <NavBarUser></NavBarUser>
            <Caroussel></Caroussel>
            <br></br>
            <br></br>
            <div> 
                <h1>Annonces habitations</h1>
            </div>
            <br></br>
            <br></br>
            <div className="Cards">
                  {post.map(item=>(
                      <ExploreCards
                      _id= {item._id}
                    image={item.picture}
                    titre={item.titre}
                    prix={item.prix}
                    message = {item.message}/>              
                  ))}
            </div>
            
        </div>
    );
}