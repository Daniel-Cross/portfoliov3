import React from "react";
import styled from "styled-components";
import { Subtitle } from "../constants/Theme";

const AboutContainer = styled.div`
  background: rgb(224, 224, 224);
  padding: 4rem 2rem 2rem 2rem;
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
    </AboutContainer>
  );
};

export default About;
