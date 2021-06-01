import "../styles/footer.css"
function Footer (){
    return(
        <footer className="footer container-fluid text-center bg-dark text-light">
            <p className = "followus">Follow us on :</p>
            <a href = "https://www.facebook.com"><button type="button" className="btn btn-social-icon btn-outline-facebook"><i className="fa fa-facebook text-light"></i></button></a>
            <a href = "https://www.instagram.com/arts.c1m"><button type="button" className="btn btn-social-icon btn-outline-instagram"><i className="fa fa-instagram text-light"></i></button></a>
            <a href = "https://twitter.com/ArtsC1m"><button type="button" className="btn btn-social-icon btn-outline-twitter"><i className="fa fa-twitter text-light"></i></button></a>
            <p className = "copyright">© 2020 Copyright : AtypickHouse Team</p>
            
        </footer>
    )
}

export default Footer;