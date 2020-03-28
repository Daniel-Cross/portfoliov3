import React from "react";
import styled from "styled-components";
import { Subtitle } from "../constants/theme";
import { device } from "../constants/theme";

const AboutContainer = styled.div`
  background: rgb(225, 225, 225, 0.8);
  padding: 3rem 2rem 3rem 2rem;
  color: #282c34;

  ${device.tablet} {
    margin: 0 15%;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Subtitle>About</Subtitle>
      <p>
        In May 2018, after 10 years working in education as a music
        teacher/deputy headmaster at schools in the UK and Sweden, I decided to
        embark on a new career as a software engineer.
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
  );
};

export default About;
