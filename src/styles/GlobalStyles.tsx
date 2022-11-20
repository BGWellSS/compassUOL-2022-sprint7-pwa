import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    // ---- Basic styles
    * {
      font-family: ${theme.fonts.familyPrimary};
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%; // conversion to 1rem == 10px
    }
    body {
      font-size: ${theme.fonts.baseSize};
      font-weight: 400;
    }
  `}
`;
