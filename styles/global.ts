import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    * {
      margin:0;
      padding:0;
      box-sizing:border-box;
      -webkit-font-smoonthing:antialiased;
      -moz-osx-font-smoonthing:grayscale;

      &::before,
      &::after {
          box-sizing:inherit;
      }
    }

    html {
      font-size: 62.5% !important;
    }

    html,
    body {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.fonts.family};
      font-size: ${theme.fonts.sizes.normal};
      color: ${theme.colors.text.primary};
      overflow-x: hidden;
      font-weight: 400;
    }

    @font-face {
      font-family: PlusJakarta;
      src: url(/assets/fonts/PlusJakartaText-Regular.otf);
      font-weight: normal;
    }

    @font-face {
      font-family: PlusJakarta;
      src: url(/assets/fonts/PlusJakartaText-Bold.otf);
      font-weight: bold;
    }
  `}
`;

export default GlobalStyle;
