import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from './UserIdConnect';

const LeftNav = () => {
  const uid = useContext(UidContext);

  return (
    <div className="left-nav-container">
      <div className="container">
        <div className="container">
          <NavLink to='/' exact >
            <img className="img_dec" src="./img/icons/homepage_home_house_icon_153873.svg" alt="home"/>
          </NavLink>
          <br/>
          <NavLink to='/search' exact >
            <img className="img_dec" src="./img/icons/icons8-chercher.svg" alt="search"/>
          </NavLink>
          <br/>
          <NavLink to='/bestof' exact >
            <img className="img_dec" src="./img/space-rocket_icon-icons.com_55296.png" alt="trends"/>
          </NavLink>
          <br/>
          <NavLink to='/profil' exact >
            <img className="img_dec" src="./img/icons8-menu-utilisateur-homme-40.png" alt="profil"/>
          </NavLink>
          <br/>
          { uid ? (
            <>
              <NavLink to='/favoris' exact >
                <img className="img_dec" src="./img/favoritesfolder_207.png" alt="favoris"/>
              </NavLink>
            </>
          ) : (
            ""
          )}
          
          
        </div>
      </div>
    </div>
  );
};

export default LeftNav;