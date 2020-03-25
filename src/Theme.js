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
