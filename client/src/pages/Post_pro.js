import React, { useContext, useState } from "react";
import { UidContext } from "../components/UserIdConnect";
import { useSelector } from "react-redux";
import ThreadsPro from "../components/ThreadsPro";
import NavBarPro from "../components/PageAccueil/NavBarPro";
import DropdownPro from "../components/PageAccueil/DropdownPro";


const Post_pro = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const [state, setState] = useState({
    isSearching: false,
    active:"search",
    post:[{}, {}],
    query: ""
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <>
    <NavBarPro toggle={toggle}/>
    <DropdownPro isOpen={isOpen} toggle={toggle}/>
    <div className="container">
      <div className="row">
        <div className="col-1">
        </div>
        <div className="col-10"  style={{paddingTop:'10%'}}>
          <br/>
          <h1>Mes posts</h1>
          <ThreadsPro />
        </div>
        <div className="col-1">
        </div>
      </div>
    </div>
    </>
  );
};

export default Post_pro;
