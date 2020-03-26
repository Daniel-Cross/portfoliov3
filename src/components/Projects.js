import React from "react";
import styled from "styled-components";
import { Subtitle } from "../constants/Theme";
import { jobs } from "../constants/JobData";
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
      {jobs &&
        jobs.length > 0 &&
        jobs.map(job => (
          <Project
            key={job.workplace}
            workplace={job.workplace.toUpperCase()}
            mobile={job.imgMobile}
            desktop={job.imgDesktop}
            summary={job.summary}
          />
        ))}
    </ProjectsContainer>
  );
};

export default Projects;
