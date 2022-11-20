import styled, { css } from 'styled-components';

export const Home = styled.div`
  ${({ theme }) => css`
    /* Home page styles */
    max-width: ${theme.breakpoints.desktopLarge};
    height: 200vh;
    margin: 0 auto;

    .content {
      padding-top: 80px;
    }
  `}
`;
