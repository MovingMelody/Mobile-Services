import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
        scroll-behavior:smooth;
        box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    fontFamily
  }
  
  .site-wrapper{
    width:1;
        margin:0 auto;
  }
`;

export default GlobalStyles;
