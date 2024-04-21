import styled, { css } from 'styled-components';

export const StyledIframe = styled.iframe<{ isLoading: boolean }>`
  display: none;
  border: none;

  * {
    outline: none;
  }

  ${({ isLoading }) =>
    !isLoading &&
    css`
      display: block;
    `}
`;
