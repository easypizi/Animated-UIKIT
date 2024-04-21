import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    ${({ theme }) => css`
      font-family: ${theme.typography.fontFamily};
      color: ${theme.palette.neutral5};
      background-color: ${theme.palette.background.main};
    `};
  }

  * {
    box-sizing: border-box;
  }
  
`;
