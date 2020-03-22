import React from "react";
import styled from "styled-components";

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const NavLink = styled.p`
  padding: 10px;
  margin: 0;
  font-size: 12px;
  font-weight: 800;
`;

const Navbar = props => {
  return (
    <>
      <NavContainer>
        <NavLink>PROJECTS</NavLink>
        <NavLink>SOCIAL</NavLink>
      </NavContainer>
    </>
  );
};

export default Navbar;
