import React from "react";
import LeftNav from "../components/LeftNav";
import NewPostForm from "../components/Post/NewPostForm";
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";


const Newpost = () => {
  const userData = useSelector((state) => state.userReducer);
  const afficheLeftNav = () =>
  {
    if (userData.role === 'client') {
      return (
        <LeftNav />
      )
    }
  }

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-1">
          {afficheLeftNav}
        </div>
        <div className="col-11">
            <NewPostForm />
        </div>
      </div>
    </div>
    </>
  );
};

export default Newpost;
