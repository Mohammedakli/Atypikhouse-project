import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Profil_pro from '../../pages/Profil_pro';
import Profil_admin from '../../pages/Profil_admin';
import Search from '../../pages/Search';
import Bestof from '../../pages/Bestof';
import Favoris from '../../pages/Favoris';
import Newpost from '../../pages/Newpost';
import Reservation from '../../pages/Reservation';
import Chat from '../../pages/Chat';
import Gestion from '../../pages/pages_admin/Gestion';
import Gestion_clients from '../../pages/pages_admin/Gestion_clients';
import Gestion_pro from '../../pages/pages_admin/Gestion_pro';
import Parametres from '../../pages/pages_admin/Parametres';
import User_view from '../../pages/pages_admin/User_view';
import Gestion_pubs from '../../pages/pages_admin/Gestion_pubs';
import Ajout_admin from '../../pages/pages_admin/Ajout_admin';
import ListAdmin from '../../pages/pages_admin/ListAdmin';


const index = () => {
        
  return (
    <div>

      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/profil_pro" exact component={Profil_pro} />
        <Route path="/profil_admin" exact component={Profil_admin} />
        <Route path="/search" exact component={Search} />
        <Route path="/bestof" exact component={Bestof} />
        <Route path="/favoris" exact component={Favoris} />
        <Route path="/newpost" exact component={Newpost} />
        <Route path="/reservation/:id" exact component={Reservation} />
        <Route path="/Chat/:id" exact component={Chat} />

        
        <Route path="/gestion" exact component={Gestion} />
        <Route path="/gestion_clients" exact component={Gestion_clients} />
        <Route path="/gestion_pro" exact component={Gestion_pro} />
        <Route path="/gestion_pubs" exact component={Gestion_pubs} />
        <Route path="/parametres" exact component={Parametres} />
        <Route path="/ajout_admin" exact component={Ajout_admin} />
        <Route path="/listadmin" exact component={ListAdmin} />
        <Route path="/user_view/:id" exact component={User_view} />
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
    
  );
};

export default index;