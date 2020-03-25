import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import headshot from "../assets/headshot.jpg";
import { Title, Subtitle } from "../constants/Theme";

const HeaderContainer = styled.div`
  height: 100vh;
  background: transparent;
`;

const LogoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  padding: 6rem 0 1rem 0;
`;

const HeroDivide = styled.hr`
  width: 80%;
  height: 2px;
  border: 0;
  background-color: #282c34;
`;

const HeroImage = styled.img`
  height: 15em;
  width: 15em;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Navbar />
        <LogoContainer>
          <HeroImage src={headshot} />
          <Title>DANIEL CROSS</Title>
          <Subtitle>SOFTWARE ENGINEER</Subtitle>
          <HeroDivide />
        </LogoContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
