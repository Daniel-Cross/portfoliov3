import React from "react";
import styled from "styled-components";
import Skiddle from "./Skiddle";

const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content; center;
`;

const Experience = () => {
  return (
    <ProjectsContainer id="projects">
      <Skiddle />
    </ProjectsContainer>
  );
};

export default Experience;
