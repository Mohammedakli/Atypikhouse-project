import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../components/UserIdConnect";
import { isEmpty } from "../components/Utilitaires";
import Card from "../components/Post/Card";
import Dropdown from '../components/PageAccueil/Dropdown';
import NavBar from '../components/PageAccueil/NavBar';

const Bestof = () => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.bestofReducer);
  const userData = useSelector((state) => state.userReducer);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
  <>
  <NavBar toggle={toggle}/>
  <Dropdown isOpen={isOpen} toggle={toggle}/>
  <div className="container" style={{paddingTop:'10%'}}>
    <div className="row">
      <div className="col-1">
     
      </div>  
      <div className="col-11">
        <br/>
        <p>Nos Best of</p>
        <ul>
          {!isEmpty(trendList[0]) && trendList.map((post) => <Card post={post} key={post._id} />)}
        </ul>
      </div>
      </div>
    
  </div>
  </>
  );
};

export default Bestof;
