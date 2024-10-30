import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
    <HeaderStyled>
        <Link to="/"><h1>Home</h1></Link>
        <Link to="users" ><h1>users</h1></Link>
        <Link to="aboutUs" ><h1>about us</h1></Link>

    </HeaderStyled>
    
    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Header;


const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: gray;
    color: white;
    >h1:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
