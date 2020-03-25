import styled from "styled-components";

const size = {
  xs: "0px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

export const device = {
  mobileSm: `(min-width: ${size.xs})`,
  mobileL: `(min-width: ${size.sm})`,
  tablet: `(min-width: ${size.md})`,
  laptop: `(min-width: ${size.lg})`,
  desktop: `(min-width: ${size.xl})`
};

export const Title = styled.h1`
  padding: 4rem 1rem 0.5rem 1rem;
  margin: 0;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: 0.3rem;
`;

export const Subtitle = styled.h2`
  padding: 0.5rem 1rem 1rem 1rem;
  margin: 0;
  text-align: center;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
`;
