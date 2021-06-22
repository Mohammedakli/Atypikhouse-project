import ParisPic from "../img/pic1.jpg"
import NewYorkPic from "../img/Pic2.jpg"
import SanFranciscoPic from "../img/Pic3.webp"
import "../styles/cards.css"

export default function PortfolioCards (){
    return(
        <div class="container">
            <h1>Explorez nos cabanes</h1>
            <h3>Partout en France métropolitaine</h3>
            <br></br>
            <br></br>
        <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="card card-small">
                <div class="thumbnail">           
                        <img alt="Opt alp thumbnail" src={ParisPic}/>
                        <a href="#/product/awesome-landing-page">
                            <div class="thumb-cover"></div>
                        </a>            
                        <div class="details">
                        <div class="clearfix"></div>
                    </div>            
                </div>
                <div class="card-info">
                    <div class="moving">
                        <a href="#/product/awesome-landing-page">
                            <h3>Paris</h3>
                            <p>Eh oui, on est sur Paris</p>
                            
                        </a>                
                        <b class="actions">
                            <a href="#/product/awesome-landing-page">Details</a>
                            <b class="separator">|</b>
                            <a class="blue-text" href="#/live/awesome-landing-page" target="_blank">Live Preview</a>
                        </b>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="card card-small">
                <div class="thumbnail">           
                    <img alt="Opt gsdp thumbnail" src={ParisPic}/>
                    <a href="#/product/get-shit-done-pro">
                        <div class="thumb-cover"></div>
                    </a>            
                    <div class="details">
                    <div class="clearfix"></div>
                    </div>            
                </div>
                <div class="card-info">
                    <div class="moving">
                        <a href="#/product/get-shit-done-pro">
                            <h3>Renne</h3>
                            <p>On est aussi sur Renne</p>
                        </a>                
                        <b class="actions">
                            <a href="#/product/get-shit-done-pro">Details</a>
                            <b class="separator">|</b>
                          <a class="blue-text" href="#/live/get-shit-done-pro" target="_blank">Live Preview</a>
                        </b>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="card card-small">
                <div class="thumbnail">           
                    <img alt="Coming sssoon thumbnail" src={SanFranciscoPic}/>
                    <a href="#/product/coming-sssoon-page">
                        <div class="thumb-cover"></div>
                    </a>            
                    <div class="details">
                        <div class="clearfix"></div>
                    </div>            
                </div>
                <div class="card-info">
                    <div class="moving">
                        <a href="#/product/coming-sssoon-page">
                            <h3>Lyon</h3>
                            <p>On est sur Lyon</p>
                        </a>                
                        <b class="actions">
                            <a href="#/product/coming-sssoon-page">Details</a>
                            <b class="separator">|</b>
                          <a class="blue-text" href="#/live/coming-sssoon-page" target="_blank">Live Preview</a>
                        </b>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

    )
}