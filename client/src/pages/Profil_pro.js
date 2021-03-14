import React, { useContext, useState } from "react";
import Index_pro from "../components/Log/Index_pro";
import { UidContext } from "../components/UserIdConnect";
import UpdateInfoProfil from "../components/Profil/UpdateInfoProfil";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import NavBarPro from "../components/PageAccueil/NavBarPro";
import DropdownPro from "../components/PageAccueil/DropdownPro";

const Profil_pro = () => {
  const uid = useContext(UidContext);

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <NavBarPro toggle={toggle}/>
    <DropdownPro isOpen={isOpen} toggle={toggle}/>
    <div className="container" >
      <div style={{paddingTop:'10%'}} >
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
