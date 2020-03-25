import React from "react";
import styled from "styled-components";

const Project = ({ workplace, mobile, desktop, summary, link, tech }) => {
  return (
    <>
      <h4>{workplace}</h4>
      <img src={mobile} alt="mobile" />
      <img src={desktop} alt="desktop" />
      <p>{summary}</p>
    </>
  );
};

export default Project;
