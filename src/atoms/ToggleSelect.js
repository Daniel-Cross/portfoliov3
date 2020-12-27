import React, { useState } from "react";
import styled from "styled-components";
import { jobs } from "../constants/jobData";

const ToggleContainer = styled.div`
  position: absolute;
  top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  height: 400px;
  width: 100px;
`;

const Option = styled.span`
  background-color: #282c34;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;

  :hover {
    transform: scale(1.1);
  }
`;

const ToggleSelect = () => {
  const [selected, setSelected] = useState();

  console.log(selected);

  return (
    <ToggleContainer>
      {jobs.map((job) => (
        <Option onClick={() => setSelected(true)}>{job.workplace[0]}</Option>
      ))}
    </ToggleContainer>
  );
};

export default ToggleSelect;
