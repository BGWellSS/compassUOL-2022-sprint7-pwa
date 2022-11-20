import styled, { css } from 'styled-components';

export const Menu = styled.nav`
  ${({ theme }) => css`
    /* Menu styles */
    .container {
      display: flex;
      padding: 0;
      margin: 0;

      .item {
        & ~ .item {
          margin-left: 2rem;
        }
      }
    }
  `}
`;
