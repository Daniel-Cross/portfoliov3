import React from "react";
import styled from "styled-components";
import { Subtitle, jobs } from "../constants/Theme";
import Project from "./Project";

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
      {/* {jobs &&
        jobs.map(job => (
          <Project
            workplace={job.workplace}
            mobile={job.imgMobile}
            desktop={job.imgDesktop}
            summary={job.projectSummary}
          />
        ))} */}
    </ProjectsContainer>
  );
};

export default Projects;
