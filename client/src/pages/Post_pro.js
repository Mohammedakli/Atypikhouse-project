import React, { useContext, useState } from "react";
import { UidContext } from "../components/UserIdConnect";
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";
import ThreadsPro from "../components/ThreadsPro";


const Post_pro = () => {
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
