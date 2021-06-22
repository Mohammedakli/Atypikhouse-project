import "../styles/navBarUser.css"
import axios from 'axios'
import {useHistory} from "react-router-dom";


export default function NavBarUser (){
  const history = useHistory();
  const logOut = ()=>{
    axios.get("http://localhost:5001/api/user/logout").then(res => {
      if(res){
        history.push('/');
      }
    })
  }
    return(
        <nav class="navbar  navbar-expand-sm">
  <a class="navbar-brand" href="/">AtypickHouse</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbar-list-4">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"/>
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Dashboard</a>
          <a class="dropdown-item" href="#">Edit Profile</a>
          <a class="dropdown-item" href="#">Log Out</a>
        </div>
        <button onClick={logOut}>logOut</button>
      </li>   
    </ul>
  </div>
</nav>
    )
}