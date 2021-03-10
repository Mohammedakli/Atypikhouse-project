import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../components/UserIdConnect";
import LeftNav from '../components/LeftNav';
import { isEmpty } from "../components/Utilitaires";
import Card from "../components/Post/Card";
import Navbar from "../components/Navbar"

const Bestof = () => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.bestofReducer);

  return (
  <>
  <Navbar />
  <div className="container">
    <div className="row">
      <div className="col-1">
      <LeftNav />
      </div>  
      <div className="col-11">
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
