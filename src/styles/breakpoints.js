const breakpoints = {
  xs: "320px",
  mobileL: "450px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  laptopL: "1440px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  mobileL: `(max-width: ${breakpoints.mobileL})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  laptopL: `(max-width: ${breakpoints.laptopL})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};
