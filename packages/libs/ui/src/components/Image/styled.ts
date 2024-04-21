import styled, { css } from 'styled-components';

export interface StyledImageProps {
  loaded?: boolean;
  rounded?: boolean;
  aspectRatio?: number;
  src?: string | undefined | null;
}

export const LazyImage = styled.img<StyledImageProps>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;

  ${({ theme, rounded }) =>
    rounded &&
    css`
      border-radius: ${theme.spacing.get(3)};
    `}

  ${({ loaded }) =>
    loaded &&
    css`
      opacity: 1;
      position: static;
    `}

    ${({ aspectRatio }) =>
    aspectRatio &&
    css`
      aspect-ratio: ${aspectRatio};
    `}
`;

export const BluredImage = styled.div<StyledImageProps>`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;

  ${({ aspectRatio }) =>
    aspectRatio &&
    css`
      aspect-ratio: ${aspectRatio};
    `}

  ${({ theme, rounded }) =>
    rounded &&
    css`
      border-radius: ${theme.spacing.get(3)};
    `}

  ${({ src }) => css`
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      background-image: url(${src});
      background-position: center;
      background-repeat: no-repeat;
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
    }
    &:before {
      background-size: cover;
      filter: blur(24px);
    }
    &:after {
      background-size: contain;
    }
  `} 
  ${({ loaded }) =>
    loaded &&
    css`
      &::before {
        opacity: 0.8;
      }

      &:after {
        opacity: 1;
      }
    `}
`;
