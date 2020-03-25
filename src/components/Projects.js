import React from "react";
import styled from "styled-components";
import { Subtitle } from "../constants/Theme";

const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content; center;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Subtitle>PROJECTS</Subtitle>
    </ProjectsContainer>
  );
};

export default Projects;
