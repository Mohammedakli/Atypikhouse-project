import NavBarUser from "../components/navBarUser"
import Footer from "../components/footer"
import ReservationCard from "../components/reservationCard"
import Caroussel from "../components/carroussel"
import {Redirect, useHistory,Link} from "react-router-dom";


export default function Reservation ({_id}){
    const history = useHistory();
    return(
        <div>
            <NavBarUser></NavBarUser>
            <Caroussel></Caroussel>
            <br></br>
            <br></br>
            
            <div> 
                <h1>Réserver pour votre séjour ! {_id}</h1>
            </div>
            <br></br>
            <br></br>
            <ReservationCard></ReservationCard>
            <Footer></Footer>
        </div>
    )
}