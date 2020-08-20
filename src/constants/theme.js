import styled, { createGlobalStyle } from "styled-components";

const size = {
  xs: "0px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

export const device = {
  mobileSm: `@media (min-width: ${size.xs})`,
  mobileL: `@media (min-width: ${size.sm})`,
  tablet: `@media (min-width: ${size.md})`,
  laptop: `@media (min-width: ${size.lg})`,
  desktop: `@media (min-width: ${size.xl})`
};

export const Title = styled.h1`
  padding: 4rem 1rem 0.5rem 1rem;
  margin: 0;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  padding: 0.5rem 1rem 1rem 1rem;
  margin: 0;
  text-align: center;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

export const Link = styled.a`
  color: #282c34;
  text-decoration: none;

  :visited {
    color: #282c34;
  }

  :hover {
    pointer: cursor;
  }
`;

export const darkTheme = {
  body: "#282c34",
  text: "#f2f2f2"
};

export const lightTheme = {
  body: "#f2f2f2",
  text: "#282c34"
};

export const GlobalStyles = createGlobalStyle`
body, html {
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
margin: 0;
padding: 0;
font-family: "Raleway", sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
min-height: 100vh;
scroll-behavior: smooth;
}
`;
