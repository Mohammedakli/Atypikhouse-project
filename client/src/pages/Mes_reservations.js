import React, { useContext, useState } from "react";
import { UidContext } from "../components/UserIdConnect";
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";
import ThreadClient from "../components/ThreadClient";


const Mes_reservations = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const [state, setState] = useState({
    isSearching: false,
    active:"search",
    post:[{}, {}],
    query: ""
  });

 
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-1">
        </div>
        <div className="col-10">
          <br/>
          <h1>Liste de mes reservations</h1>
          <ThreadClient />
        </div>
        <div className="col-1">
        </div>
      </div>
    </div>
    </>
  );
};

export default Mes_reservations;
