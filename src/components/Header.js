import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #f2f2f2;
  height: 100vh;
`;

const LogoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLogo = styled.h1`
  padding: 10px;
  margin: 0;
  font-weight: 400;
  font-size: 32px;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Navbar />
        <LogoContainer>
          <NavLogo>DANIEL CROSS</NavLogo>
          <NavLogo>SOFTWARE ENGINEER</NavLogo>
        </LogoContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
