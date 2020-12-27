import React from "react";
import styled from "styled-components";
import { device } from "../constants/theme";
import Fade from "react-reveal/Fade";

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 2rem 2rem;
`;

const JobTitle = styled.h4`
  letter-spacing: 0.1rem;
  padding: 30px 0;
`;

const MobileImg = styled.img`
  width: 95vw;
  ${device.mobileL} {
    width: 50vw;
  }
  ${device.laptop} {
    display: none;
  }
`;

const DesktopImg = styled.img`
display: none;
${device.laptop} {
  display: flex;
  width: 80vw;}
};

${device.desktop} {
  width: 45vw;
}
`;

const JobSummary = styled.p`
  padding: 30px 0;
  line-height: 22px;
  font-size: 15px;
  letter-spacing: 0.15px;
  font-weight: normal;

  ${device.tablet} {
    margin: 0 15%;
  }

  ${device.desktop} {
    margin: 0 10%;
  }
`;

const SummaryContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.desktop} {
    flex-direction: ${({ index }) => (index % 2 ? "row" : "row-reverse")};
    justify-content: space-between;
    margin: 3% 0 0 0;
  }
`;

const Project = ({ jobs }) => {
  return (
    <>
      <Fade bottom delay={500} duration={2000}>
      {jobs &&
        jobs.length > 0 &&
        jobs.map((job, index) => (
          <>
            <JobContainer>
              <JobTitle>{job.workplace}</JobTitle>
              <SummaryContainer index={index}>
                {job.imgMobile && job.imgMobile.length > 0 && (
                  <MobileImg src={job.imgMobile} alt="mobile" />
                )}
                {job.imgDesktop && job.imgDesktop.length > 0 && (
                  <DesktopImg src={job.imgDesktop} alt="desktop" />
                )}
                <JobSummary>{job.summary}</JobSummary>
              </SummaryContainer>
            </JobContainer>
          </>
        ))}
      </Fade>
    </>
  );
};

export default Project;
