import '../styles/navBar.css'

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg fixed-top">
  <a class="navbar-brand" href="/">AtypickHouse</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/signInAdmin">Administrateur </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signInProprio">Propriétaire</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signIn">Locataire</a>
      </li>
     
    </ul>
  </div>
</nav>
        
        
       
        
    )
}