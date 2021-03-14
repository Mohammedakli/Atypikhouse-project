import React, {useState} from "react";
import LeftNav from "../components/LeftNav";
import NewPostForm from "../components/Post/NewPostForm";
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";
import Dropdown from '../components/PageAccueil/Dropdown';
import NavBarPro from "../components/PageAccueil/NavBarPro";
import DropdownPro from "../components/PageAccueil/DropdownPro";


const Newpost = () => {
  const userData = useSelector((state) => state.userReducer);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <NavBarPro toggle={toggle}/>
    <DropdownPro isOpen={isOpen} toggle={toggle}/>
    <div className="container"  style={{paddingTop:'10%'}}>
            <NewPostForm />  
    </div>
    </>
  );
};

export default Newpost;
