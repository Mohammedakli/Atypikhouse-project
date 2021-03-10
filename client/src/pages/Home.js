import React, { useContext, useState } from "react";
import { UidContext } from "../components/UserIdConnect";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import Trends from "../components/Trends";
import SearchForm from "../components/Post/SearchForm";
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";


const Home = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const [state, setState] = useState({
    isSearching: false,
    active:"search",
    post:[{}, {}],
    query: ""
  });

  const onTextChange = input => {
    setState({ ...state, isSearching : input.length > 0})
    console.log(input)
  }

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
          {afficheLeftNav()}
        </div>
        <div className="col-7">
          <br/>
          <SearchForm/>
          <hr/>
          <Thread />
        </div>
        <div className="col-4">
          <Trends />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
