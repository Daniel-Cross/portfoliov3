import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import avatarHeadshot from "../assets/avatarHeadshot.jpg";
import { Title, Subtitle } from "../constants/theme";
import { device } from "../constants/theme";

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
  background-color: ${({ theme }) => theme.text};

  ${device.tablet} {
    width: 60%;}
  };

  ${device.laptop} {
    width: 40%;}
  };
  `;

const HeroImage = styled.img`
  height: 15em;
  width: 15em;
  border-radius: 50%;
`;

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <Navbar {...props} />
        <LogoContainer>
          <HeroImage src={avatarHeadshot} />
          <Title>DANIEL CROSS</Title>
          <Subtitle>SOFTWARE ENGINEER</Subtitle>
          <HeroDivide />
        </LogoContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
