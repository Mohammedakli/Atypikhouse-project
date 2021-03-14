import React, { useContext, useState } from "react";
import { UidContext } from "../components/UserIdConnect";
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";
import ThreadClient from "../components/ThreadClient";
import Dropdown from '../components/PageAccueil/Dropdown';
import NavBar from '../components/PageAccueil/NavBar';


const Mes_reservations = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  const [state, setState] = useState({
    isSearching: false,
    active:"search",
    post:[{}, {}],
    query: ""
  });

 
  return (
    <>
    <NavBar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <div className="container" style={{paddingTop:'10%'}}>
      <div className="row">
        <div className="col-12">
          <br/>
          <p>Liste de mes reservations</p>
          <ThreadClient />
        </div>
      </div>
    </div>
    </>
  );
};

export default Mes_reservations;
