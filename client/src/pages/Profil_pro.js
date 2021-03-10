import React, { useContext } from "react";
import Index_pro from "../components/Log/Index_pro";
import { UidContext } from "../components/UserIdConnect";
import UpdateInfoProfil from "../components/Profil/UpdateInfoProfil";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import Navbar from "../components/Navbar";

const Profil_pro = () => {
  const uid = useContext(UidContext);

  return (
    <>
    <Navbar />
    <div className="container" >
      <div style={{ backgroundImage: "./img/fond.svg" }} >
        {uid ? (
          <UpdateInfoProfil />
        ) : (
          <div>
              <div className="row">
                <div className="col">
                  <Index_pro signin={true} signup={false} />
                </div>
               
              </div>
            </div>
          )}
        </div>
    </div>
    </>
  );
};

export default Profil_pro;
