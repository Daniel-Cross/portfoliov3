import React from "react";
import styled from "styled-components";
import { Subtitle, device } from "../constants/theme";
import { jobs } from "../constants/jobData";
import Project from "./Project";

const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content; center;
padding: 10rem 0 4rem 0;

${device.desktop} {
  margin: 5% 0 0 0;
}
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Subtitle>PROJECTS</Subtitle>
      {jobs &&
        jobs.length > 0 &&
        jobs.map((job) => (
          <Project
            index={job.index}
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
