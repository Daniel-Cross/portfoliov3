import React from "react";
import styled from "styled-components";
import { Subtitle, device } from "../constants/theme";
import Fade from "react-reveal/Fade";
import { animated } from "react-spring";

const AboutContainer = styled(animated.div)`
  background: #f2f2f2;
  border-radius: 11px;
  padding: 3rem 2rem 3rem 2rem;
  color: #282c34;
  opacity: 0.8;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  ${device.tablet} {
    margin: 0 15%;
  }
`;

const About = () => {
  return (
    <Fade bottom delay={500} duration={2000}>
      <AboutContainer>
        <Subtitle>About</Subtitle>
        <p>
          In May 2018, after 10 years working in education as a music
          teacher/deputy headmaster at schools in the UK and Sweden, I decided
          to embark on a new career as a software engineer.
        </p>
        <p>
          After studying at a coding boot camp for 6 months, part-time, I was
          employed as a React developer in October 2018.
        </p>
        <p>
          Since then I have gone on to work at various establishments based in
          Manchester City Centre, and returned to teaching others how to code as
          they begin their journey towards a new career.
        </p>
        <p>
          When not writing code or teaching, you can find me at the gym, a
          meet-up, a gig or watching/suffering football.
        </p>
      </AboutContainer>
    </Fade>
  );
};

export default About;
