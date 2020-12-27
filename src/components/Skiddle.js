import React from "react";
import styled from "styled-components";
import { device, Subtitle } from "../constants/theme";
import logo from "../assets/logo_vertical_rebrand.png";
import { jobs } from "../constants/jobData";
import Navbar from "./Navbar";

const VideoContainer = styled.div`
  display: none;
  ${device.laptop} {
    display: inline;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  height: 105.5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkiddleLogo = styled.img`
  margin-top: 2rem;
  height: 9.66667em;
  width: 12.66667em;
`;

const SummaryContainer = styled.div`
  border: solid 2px #f2f2f2;
  border-radius: 11px;
  width: 30%;
  padding: 30px;
  text-align: center;
`;

const Skiddle = () => {
  return (
    <>
      <VideoContainer>
        <video
          style={{ width: "100vw", top: "0", position: "absolute" }}
          playsinline
          autoplay="yes"
          muted="yes"
          loop="yes"
          poster="https://d1plawd8huk6hh.cloudfront.net/images/video/skiddle.jpg"
        >
          <source
            src="https://d1plawd8huk6hh.cloudfront.net/images/video/skiddle.mp4"
            type="video/mp4"
          />
        </video>
      </VideoContainer>
      <Overlay>
        <Navbar colour="dark" />
        <SkiddleLogo src={logo} alt="skiddleLogo" />
        <Subtitle style={{ padding: "30px 0 0 0" }}>REACT DEVELOPER</Subtitle>
        <p>November 2019 - Present</p>
        <SummaryContainer>
          {jobs[0].summary}{" "}
          <ul>
            {jobs[0].tech.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
        </SummaryContainer>
      </Overlay>
    </>
  );
};

export default Skiddle;
