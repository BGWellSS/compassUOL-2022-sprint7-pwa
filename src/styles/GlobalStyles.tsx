import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    // ---- Basic styles
    html {
      font-size: 62.5%; // conversion to 1rem == 10px
    }
    body {
      font-family: ${theme.fonts.familyPrimary};
      font-size: ${theme.fonts.coreSize};
      font-weight: 400;
    }
  `}
`;
