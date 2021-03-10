import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { UidContext } from './UserIdConnect';
import Logout from './Log/Logout';

const LeftNavAdmin = () => {
  const uid = useContext(UidContext);

  return (
    <div className="left-nav-container">
      <div className="container">
        <div className="container">
          <br/>
          { uid ? (
            <>
              <NavLink to='/gestion_clients' exact >
                  Gestion des clients
              </NavLink>
              <hr/>
              <NavLink to='/gestion_pro' exact >
                  Gestion des propriétaires
              </NavLink>
              <hr/>
              <NavLink to='/gestion_pubs' exact >
                  Gestion des Publications
              </NavLink>
              <hr/>
              <NavLink to='/parametres' exact >
                  Paramètres
              </NavLink>
              <hr/>
                <NavLink to=''>
                <Logout/>
              </NavLink>
              <hr/>
            </>
          ) : (
            ""
          )}
          
          
        </div>
      </div>
    </div>
  );
};

export default LeftNavAdmin;