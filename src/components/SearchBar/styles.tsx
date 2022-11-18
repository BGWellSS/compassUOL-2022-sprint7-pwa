import styled, { css } from 'styled-components';

export const SearchBar = styled.div`
  ${({ theme }) => css`
    /* Search bar styles */
    display: flex;
    align-items: center;
    background: ${theme.colors.grey};
    border-radius: 4px;
    padding: 1rem 0.8rem;
    box-sizing: border-box;

    input {
      width: 100%;
      border: 0;
      margin-left: 0.8rem;
      outline: none;
      background-color: transparent;
      color: ${theme.colors.lowEmphasis};
      font-family: ${theme.fonts.familyPrimary};
      ${theme.typos.titleMedium}
    }
  `}
`;
