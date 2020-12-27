import React from "react";
import styled from "styled-components";
import avatarHeadshot from "../assets/avatarHeadshot.jpg";
import { device } from "../constants/theme";
import { animated } from "react-spring";

const HeaderContainer = styled.div`
  background: transparent;
`;

const HeroCard = styled(animated.div)`
  background: #f2f2f2;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 90%;
  opacity: 0.8;
  position: absolute;
  top: 30%;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  ${device.desktop} {
    width: 40%;
  }
`;

const LogoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 6rem 0 0 0;
`;

const HeroImage = styled(animated.img)`
  height: 10em;
  width: 10em;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: -30%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 12px 3px;

  ${device.desktop} {
    top: -20%;
  }
`;

const Title = styled(animated.h1)`
  padding: 5.5rem 1rem 0 1rem;
  margin: 0;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: #282c34;

  ${device.desktop} {
    padding-top: 6rem;
  }
`;

const Subtitle = styled(animated.h2)`
  padding: 0.5rem 1rem 1rem 1rem;
  margin: 0;
  text-align: center;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: #282c34;
`;

const Summary = styled(animated.p)`
  padding: 0 1.5rem 1.5rem 1.5rem;
  text-align: center;
  margin: 0;

  ${device.desktop} {
    padding: 0 2rem 2rem 2rem;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <HeroCard>
            <HeroImage src={avatarHeadshot} />
            <Title>DANIEL CROSS</Title>
            <Subtitle>FRONTEND DEVELOPER</Subtitle>
            <Summary>
              Bootcamp graduate with over 2 years experience as a React
              developer. Retrained in 2018, after 10 years working in education
              schools in the UK and Sweden.
            </Summary>
            <Summary>
              Currently working as a React developer and coding teacher for a
              companies based in the UK but living in Stockholm, Sweden.
            </Summary>
            <Summary>
              When not writing code or teaching, you can find me at the gym, a
              meet-up, a gig or watching/suffering football.
            </Summary>
          </HeroCard>
        </LogoContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
