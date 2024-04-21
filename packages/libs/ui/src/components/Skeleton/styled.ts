import styled, { css, keyframes } from 'styled-components';

export interface SkeletonStyledProps {
  height?: string;
  width?: string;
  isText?: boolean;
}

export const skeletonAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const StyledSkeleton = styled.div<SkeletonStyledProps>`
  ${({ theme }) => css`
    background: linear-gradient(
      90deg,
      ${theme.palette.neutral40},
      ${theme.palette.neutral60},
      ${theme.palette.neutral40}
    );
  `}
  background-size: 200% 200%;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  border-radius: ${({ theme }) => theme.spacing.get(3)};

  ${({ isText }) =>
    isText &&
    css`
      height: 1em;
    `}
`;
