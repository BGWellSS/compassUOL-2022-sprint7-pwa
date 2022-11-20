import styled, { css } from 'styled-components';

export const MenuItem = styled.li`
  ${({ theme }) => css`
    /* MenuItem styles */
    list-style: none;
    ${theme.typos.heading.m_14}

    .link {
      text-decoration: none;
      color: ${theme.colors.highEmphasis};

      &:hover {
        color: ${theme.colors.primaryTint};
      }
      &:visited {
        text-decoration: none;
        color: ${theme.colors.highEmphasis};
      }
    }
  `}
`;
