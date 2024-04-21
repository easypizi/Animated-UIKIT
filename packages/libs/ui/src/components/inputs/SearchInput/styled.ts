import styled, { css } from 'styled-components';

export const SearchWrapper = styled.div`
  & > label > div {
    background: ${({ theme }) => css`
      ${theme.palette.neutral80};
      box-shadow: unset;
    `};
  }
`;
