import logo from './logo.svg';
import './App.css';
import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import signIn from './pages/signIn'
import signUp from './pages/signUp'
import home from './pages/home'
import signInProprio from './pages/signInProprio'
import signUpProprio from './pages/signUpProprio'
import signInAdmin from './pages/signInAdmin'
function App() {
  return (
    <div className="App">
     <Router>
      <main>
        
        <Route path="/" exact component={home} />
        <Route path="/signUp" component={signUp} />
        <Route path="/signIn" component={signIn} />
        <Route path="/signUpProprio" component={signUpProprio} />
        <Route path="/signInProprio" component={signInProprio} />
        <Route path="/signInAdmin" component={signInAdmin} />
        {/* <Route path="/contact" component={Contact} />  */}
      </main>
    </Router>
    </div>
  );
}

export default App;
