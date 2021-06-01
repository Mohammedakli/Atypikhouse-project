import ParisPic from "../img/pic1.jpg"
import NewYorkPic from "../img/Pic2.jpg"
import SanFranciscoPic from "../img/Pic3.webp"
import "../styles/cards.css"

export default function PortfolioCards (){
    return(
    <div class="container-fluid text-center bg-grey">
        <h1 style ={{fontSize : 40}}>Explorez nos cabanes</h1>
        <br></br>
        <h2>Basée en France métropolitaine</h2>
        <br></br>
        <div class="row text-center">
            <div class="col-sm-4">
            <div class="thumbnail">
                <img src={ParisPic} alt="Paris"/>
                <p><strong>Paris</strong></p>
                <p>Oui, on se trouve à Paris</p>
            </div>
            </div>
        <div class="col-sm-4">
        <div class="thumbnail">
            <img src={SanFranciscoPic} alt="New York"/>
            <p><strong>Renne</strong></p>
            <p>Oui, on se trouve à New York</p>
        </div>
        </div>
        <div class="col-sm-4">
        <div class="thumbnail">
            <img src={SanFranciscoPic} alt="San Francisco"/>
            <p><strong>Lyon</strong></p>
            <p>Oui, on se trouve à San Francisco</p>
        </div>
        </div>
    </div>
    </div>

    )
}