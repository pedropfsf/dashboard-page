import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-level-1: #DE541E;
    --primary-level-2: #893413;
    --primary-level-3: #341407;

    --green-level-1: #1EDE54;
    --green-level-2: #128532;
    --green-level-3: #0C5922;

    --purple-level-1: #541EDE;
    --purple-level-2: #321285;
    --purple-level-3: #2A0F6F;

    --light-level-1: #FAFAFA;
    --light-level-2: #E5E5E5;
    --light-level-3: #C8C8C8;

    --dark-level-1: #0A0A0A;
    --dark-level-2: #232323;
    --dark-level-3: #3B3B3B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`;

const theme = {
  colors: {
    primary: {
      1: "#DE541E",
      2: "#893413",
      3: "#341407",
    },
    green: {
      1: "#1EDE54",
      2: "#128532",
      3: "#0C5922",
    },
    purple: {
      1: "#541EDE",
      2: "#321285",
      3: "#2A0F6F",
    },
    light: {
      1: "#FAFAFA",
      2: "#F4F4F4",
      3: "#C8C8C8",
    },
    dark: {
      1: "#0A0A0A",
      2: "#232323",
      3: "#3B3B3B",
    },
  },
  fontSizes: {
    xxs: "10px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "28px",
    "3xl": "32px",
    "4xl": "40px",
  },
  radii: {
    px: "2px",
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "30px",
    "2xl": "32px",
    full: "99999px",
  },
  space: {
    px: "2px",
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "48px",
  },
};

export { theme };
export default GlobalStyles;
