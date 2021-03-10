import React, { useContext } from "react";
import { UidContext } from "../components/UserIdConnect";
import LeftNav from "../components/LeftNav";
import ThreadsFavoris from "../components/ThreadsFavoris";
import Navbar from "../components/Navbar"

const Favoris = () => {
  const uid = useContext(UidContext);

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <LeftNav />
          </div>
          <div className="col-11">
            <br/>
            <h4>Liste des favoris</h4>
            <div className="main">
              <div className="home-header">
              </div>
              {uid && <ThreadsFavoris />}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Favoris;
