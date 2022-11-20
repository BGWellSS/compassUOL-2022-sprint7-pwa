import styled, { css } from 'styled-components';

export const Message = styled.div`
  ${({ theme }) => css`
    /* Message styles */
    background-color: ${theme.colors.grey};
    text-align: center;

    .text {
      padding: 1.6rem;
      margin: 0;
      ${theme.typos.heading.m_14}
      color: ${theme.colors.highEmphasis};

      .link {
        color: ${theme.colors.primary};

        &:visited {
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`;
