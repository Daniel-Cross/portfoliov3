import React from "react";
import styled from "styled-components";
import { device } from "../constants/Theme";

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 2rem 2rem 2rem;
`;

const JobTitle = styled.h4`
  letter-spacing: 0.1rem;
  padding: 30px 0;
`;

const MobileImg = styled.img`
  width: 95vw;
  ${device.mobileL} {
width: 100%;}
};
`;

const DesktopImg = styled.img`
display: none;
${device.mobileL} {
  display: flex;
width: 95vw;}
};
`;

const JobSummary = styled.p`
  padding: 30px 0;
  line-height: 22px;
  font-size: 15px;
  letter-spacing: 0.15px;
  font-weight: normal;
`;

const Project = ({ workplace, mobile, desktop, summary, link, tech }) => {
  return (
    <JobContainer>
      <JobTitle>{workplace}</JobTitle>
      {mobile && mobile.length > 0 && <MobileImg src={mobile} alt="mobile" />}
      {desktop && desktop.length > 0 && (
        <DesktopImg src={desktop} alt="desktop" />
      )}
      <JobSummary>{summary}</JobSummary>
    </JobContainer>
  );
};

export default Project;
