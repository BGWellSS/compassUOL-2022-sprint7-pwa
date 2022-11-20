import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    /* Header styles */
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${theme.breakpoints.desktopLarge};
    padding: 1.8rem 2rem;
    background: white;

    .sides {
      display: flex;
      align-items: center;
      width: 50%;
    }

    .sideB {
      justify-content: flex-end;
    }

    .logo {
      margin-right: 3.2rem;
    }

    .search-container {
      width: 60%;
    }

    .nav-icons {
      margin-left: 2.5rem;

      .icons {
        & ~ .icons {
          margin-left: 2rem;
        }
      }
    }
  `}
`;
