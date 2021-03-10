import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/UserIdConnect";
import UpdateInfoProfil from "../components/Profil/UpdateInfoProfil";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import Navbar from "../components/Navbar"

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <>
    <Navbar/>
    <div className="container" >
      <div style={{ backgroundImage: "./img/fond.svg" }} >
        {uid ? (
          <UpdateInfoProfil />
        ) : (
          <div>
              <div className="row">
                <div className="col">
                  <Log signin={true} signup={false} />
                </div>
                <div className="col">
                  <img src="./img/loge.png" alt="img" />
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
    </>
  );
};

export default Profil;
