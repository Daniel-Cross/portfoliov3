import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import headshot from "../assets/headshot.jpg";

const HeaderContainer = styled.div`
  background: #f2f2f2;
  height: 100vh;
`;

const LogoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  padding: 6rem 0 1rem 0;
`;

const HeroName = styled.h1`
  padding: 4rem 1rem 0.5rem 1rem;
  margin: 0;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 0.3rem;
`;

const HeroSub = styled.h2`
  padding: 0.5rem 1rem 1rem 1rem;
  margin: 0;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
`;

const HeroDivide = styled.hr`
  width: 80%;
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
          <HeroName>DANIEL CROSS</HeroName>
          <HeroSub>SOFTWARE ENGINEER</HeroSub>
          <HeroDivide />
        </LogoContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
