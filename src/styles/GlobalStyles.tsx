import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
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
