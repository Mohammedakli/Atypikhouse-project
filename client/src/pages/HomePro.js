import React, { useContext, useState } from "react";
import { UidContext } from "../components/UserIdConnect";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import Trends from "../components/Trends";
import SearchForm from "../components/Post/SearchForm";
import { useSelector } from "react-redux";
import Dropdown from '../components/PageAccueil/Dropdown';
import NavBarPro from "../components/PageAccueil/NavBarPro";
import DropdownPro from "../components/PageAccueil/DropdownPro";

const HomePro = () => {
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



  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <NavBarPro toggle={toggle}/>
    <DropdownPro isOpen={isOpen} toggle={toggle}/>
    <div className="container" style={{paddingTop:'10%'}}>
      <div className="row">
        <div className="col-12">
          <br/>
          <SearchForm/>
          <hr/>
          <Thread />
        </div>
        <div className="">
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePro;
