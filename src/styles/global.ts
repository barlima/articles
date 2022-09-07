import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #eaeaea;
    --color-dark: #1a1a1a;
    --color-black: #000;
    --color-grey: #777;
    --color-accent: #cc2211;
    --color-shadow: rgba(200, 200, 200, 0.4);

    --space-s: 8px;
    --space-m: 16px;
    --space-l: 24px;
    --space-xl: 32px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    margin: 0;
  }

  h1 {
    font-size: 32px;
    @media ${breakpoints.size.m} { font-size: 64px; }
  }

  h2 {
    font-size: 20px;
    @media ${breakpoints.size.m} { font-size: 32px; }
  }

  h3 {
    font-size: 18px;
    @media ${breakpoints.size.m} { font-size: 24px; }
  }

  h4 {
    font-size: 16px;
    @media ${breakpoints.size.m} { font-size: 20px; }
  }

  h5 {
    font-size: 12px;
    @media ${breakpoints.size.m} { font-size: 16px; }
  }

  h6 {
    font-size: 10px;
    @media ${breakpoints.size.m} { font-size: 14px; }
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
