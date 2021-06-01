import React, { useState } from "react";
import Caroussel from "../components/carroussel"
import NavBar from "../components/navBar"
import PortfolioCards from "../components/cards"
import Footer from "../components/footer"
import Service from "../components/service"
import Services from "../components/service";

export default function Home() {
    return(
        <div>
            
            <NavBar></NavBar>
            <Caroussel></Caroussel>
            <PortfolioCards></PortfolioCards>
            <br></br>
            <br></br>
            <Services></Services>
            <Footer></Footer>
            
        </div>
    )
}