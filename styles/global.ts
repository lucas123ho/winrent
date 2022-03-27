import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    :root {
      --padding-horizontal: 1.6rem;
    }

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

      @media (max-width: ${theme.breakPoints.sm}) {
        font-size: 55.5% !important;
      }
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
      line-height: 2.4rem;
      overflow-x: hidden;
      font-weight: 400;
    }

    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
      transition: color .3s ease-in-out;

      &:hover {
        color: ${theme.colors.primary};
      }     
    }

    p {
      margin: 0;
    }

    @font-face {
      font-family: PlusJakarta;
      src: url(/assets/fonts/PlusJakartaSans-Regular.ttf);
      font-weight: 400;
    }

    @font-face {
      font-family: PlusJakarta;
      src: url(/assets/fonts/PlusJakartaSans-Bold.ttf);
      font-weight: 700;
    }

    @font-face {
      font-family: PlusJakarta;
      src: url(/assets/fonts/PlusJakartaSans-ExtraBold.ttf);
      font-weight: 800;
    }
  `}
`;

export default GlobalStyle;
