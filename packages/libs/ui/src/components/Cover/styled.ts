import styled, { css } from 'styled-components';

export const CoverWrapper = styled.div<{
  bgColors: string;
  aspectRatio?: number;
  rounded?: boolean;
}>`
  ${({ theme, rounded, bgColors }) => css`
    container-type: inline-size;
    width: 100%;
    height: 100%;
    border-radius: ${rounded ? theme.spacing.get(3) : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, ${bgColors});
  `}

  ${({ aspectRatio }) =>
    aspectRatio &&
    css`
      aspect-ratio: ${aspectRatio};
    `}
`;

export const CoverTitle = styled.span`
  ${({ theme }) => css`
    ${theme.typography.headerLG};
    width: 100%;
    color: ${theme.palette.neutral100};
    text-align: center;
    font-size: 50cqw;
    font-size-adjust: 0.5;
  `}
`;
