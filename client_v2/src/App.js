import logo from './logo.svg';
import './App.css';
import React, { Fragment , useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import signIn from './pages/signIn'
import signUp from './pages/signUp'
import home from './pages/home'
import signInProprio from './pages/signInProprio'
import signUpProprio from './pages/signUpProprio'
import signInAdmin from './pages/signInAdmin'
import explore from './pages/explore'
import reservation from './pages/reservation'
import postForm from './pages/createPostForm'
import Welcome from './pages/Welcome'
import StripeContainer from './pages/StripeContainer';
import axios from 'axios'
function App() {
  const [isLoged, setIsLoged] = useState(false);
  return (
    <div className="App">
     <Router>
      <main>
        <Route path="/" exact component={home} />
        <Route path="/signUp" component={signUp} />
        <Route path="/signIn" component={signIn} />
        <Route path="/Welcome" component={Welcome}/>
        <Route path="/signUpProprio" component={signUpProprio} />
        <Route path="/signInProprio" component={signInProprio} />
        <Route path="/signInAdmin" component={signInAdmin} />
        <Route path="/explore" component={explore} />
        <Route path="/reservation/:id" component={reservation} />
        <Route path="/createPostForm" component={postForm} />
        <Route path='/payment/:id' component={StripeContainer}/>
        {/* <Route path="/contact" component={Contact} />  */}
      </main>
    </Router>
    </div>
  );
}

export default App;
