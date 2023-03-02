import React, { useState } from 'react'
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../Assets/logo.png"

const Header = () => {

  // State for the menu and cancel button to show
  const [toggle, setToggle] = useState(false);

  const showNavSide = () =>{
      setToggle(!toggle)
  }

  const removeNavSide = () =>{
      setToggle(false)
  }
  
  return (
    <div>
      <Container>
          <Wrapper>
            <WrapAll>
              <Logo>
                <Img src={logo} />
              </Logo>
              <Navigation>
                  <Nav>Home</Nav>
                  <Nav>Contact Me</Nav>
                  <Nav>Blogs</Nav>
              </Navigation>
            </WrapAll>
            <Buttons>
                <Login>Login</Login>
                <SignUp>Upload Posts</SignUp>
            </Buttons>
          </Wrapper>

          {/* For the menu and cancel button to show */}
          {
                toggle ?  <span onClick={removeNavSide}>x</span> :  
                <Hamburger  onClick={showNavSide}>
                <GiHamburgerMenu />
            </Hamburger> 
            }
      </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
    color: white;
    z-index: 999;
    span{
        font-size: 70px;
        display: none;
        cursor: pointer;
        @media screen and (max-width: 500px) {
            display: block;
        }
    }
`;
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    /* background-color: red; */
    justify-content: space-between;
`;
const Logo = styled.div`
    cursor: pointer;
    font-size: 30px;
    width: 100px;
    height: 70px;
    font-weight: bold;
`;
const WrapAll = styled.div`
  /* background-color: orange; */
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 50px;
  object-fit: contain;
  /* background-color: green; */
`;
const Navigation = styled.div`
    display: flex;
    justify-content: space-around;
    /* background-color: brown; */
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
const Nav = styled.div`
    margin-right: 20px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: black;
    @media screen and (max-width: 500px) {
        margin-bottom: 20px;
        border-top: 1px solid white;
        padding-left: 15px;
        display: flex;
        align-items: center;
    }
`;
const Buttons = styled.div`
    display: flex;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
const Login = styled.div`
    margin-right: 10px;
    cursor: pointer;
    background-color: black;
    padding: 10px 15px;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const SignUp = styled.div`
    cursor: pointer;
    background-color: black;
    padding: 10px 15px;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;