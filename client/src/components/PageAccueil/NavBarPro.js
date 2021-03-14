import React, { useContext } from 'react'
import { UidContext } from "../UserIdConnect";
import styled, { css } from "styled-components/macro"
import {Link}  from 'react-router-dom'
import { menuData, menuDataLocaitaire, menuDataPro } from '../../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import Logout from '../Log/Logout';
import { useSelector } from 'react-redux';


const Nav = styled.nav`
    height : 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    text-decoration: none;
`


const Logo = styled(Link)`
    ${NavLink}
    

`

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
    }
`;

const NavMenu = styled.div`
    display : flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavBarPro = ({toggle}) => {

    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);

    return (
        <Nav>
            <Logo><h3 style={{ color: 'white', fontFamily: 'fantasy' }}>AtypikHouse</h3></Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
            {uid ? (
                menuDataPro.map((item, index) => (
                <NavMenuLinks to= {item.link}  key={index}>
                    {item.title}
                </NavMenuLinks>
                ))) : (
                menuData.map((item, index) => (
                    <NavMenuLinks to= {item.link}  key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))) }
                {uid ? (
                    <Logout />
                ) : (
                    <div></div>
                )}
            </NavMenu>
            <NavBtn>
                <Button to="/homepro" primary='true'>Home</Button>
            </NavBtn>
        </Nav>
    )
}

export default NavBarPro
