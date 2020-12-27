import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import { colours } from "../constants/theme";

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 50px 0;
  min-width: 93%;
`;

const NavLink = styled(Link)`
  padding: 0 0 3px 0;
  color: ${({ colour }) => (colour === "dark" ? colours.light : colours.dark)};
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
    background: ${({ colour }) =>
      colour === "dark" ? colours.light : colours.dark};

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

const Navbar = ({ colour }) => {
  return (
    <>
      <NavContainer>
        <Socials colour={colour} />
        {colour === "dark" ? (
          <NavLink colour={colour} to="/">
            SUMMARY
          </NavLink>
        ) : (
          <NavLink colour={colour} to="/experience">
            EXPERIENCE
          </NavLink>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;
