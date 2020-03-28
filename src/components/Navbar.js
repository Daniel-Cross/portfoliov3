import React from "react";
import styled from "styled-components";

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const NavLink = styled.a`
  padding: 0 0 3px 0;
  color: ${({ theme }) => theme.text};
  margin: 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.2rem;
  position: relative;
  text-decoration: none;
  :after,
  active {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #282c34;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover {
    cursor: pointer;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;

const Navbar = ({ setTheme, theme }) => {
  return (
    <>
      <NavContainer>
        <NavLink href="#projects">PROJECTS</NavLink>
        <NavLink href="#social">SOCIAL</NavLink>
        <NavLink onClick={setTheme}>
          {theme && theme === "light" ? "DARK" : "LIGHT"}
        </NavLink>
      </NavContainer>
    </>
  );
};

export default Navbar;
