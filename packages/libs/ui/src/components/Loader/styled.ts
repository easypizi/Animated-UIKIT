import styled, { css, keyframes } from 'styled-components';
import type { ThemePaletteKey } from '../../themes';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export interface RootProps {
  size?: number | string;
  color?: ThemePaletteKey | 'inherit';
}

export const Root = styled.div<RootProps>`
  position: relative;
  flex-shrink: 0;
  animation: ${rotateAnimation} 1.5s linear infinite;
  color: ${({ theme, color = 'inherit' }) =>
    color in theme.palette ? theme.palette[color] : color};
  ${({ size = 20 }) => {
    const fixedSize = typeof size === 'number' ? `${size}px` : size;
    return css`
      width: ${fixedSize};
      height: ${fixedSize};
    `;
  }}
`;

export const Dot = styled.div`
  position: absolute;
  width: 18%;
  height: 18%;
  border-radius: 50%;
  background-color: currentColor;

  &:nth-child(1) {
    top: 10%;
    left: 41%;
  }

  &:nth-child(2) {
    top: 41%;
    right: 10%;
  }

  &:nth-child(3) {
    bottom: 10%;
    left: 41%;
  }

  &:nth-child(4) {
    bottom: 41%;
    left: 10%;
  }
`;
