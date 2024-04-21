import styled, { css } from 'styled-components';
import { IconButton } from '../IconButton';

const sizes = {
  xs: 240,
  sm: 320,
  md: 540,
  lg: 720,
  xl: 960,
  full: '100%',
  auto: 'auto',
};

export type DrawerPosition = 'right' | 'bottom' | 'left' | 'top';

export type DrawerSize = keyof typeof sizes;

export interface DrawerContentProps {
  position: DrawerPosition;
  level?: number;
  size?: DrawerSize;
  sizeValue?: string | number | null;
  disablePadding?: boolean;
}

export const CloseIconButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: ${(p) => p.theme.zIndex.modal};
`;

export const DrawerContent = styled.div<DrawerContentProps>`
  position: absolute;
  max-width: 100%;
  background-color: ${(p) => p.theme.palette.background.main};
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  &.enter {
    transform: translate3d(0, 0, 0);
  }

  ${({ position, size: sizeVariant = 'auto', sizeValue }) => {
    let size = sizeValue || sizes[sizeVariant];
    if (typeof size === 'number') {
      size = `${size}px`;
    }

    if (position === 'right') {
      return css`
        inset: 0 0 0 auto;
        width: ${size};
        transform: translate3d(100%, 0, 0);
      `;
    }
    if (position === 'left') {
      return css`
        inset: 0 auto 0 0;
        width: ${size};
        transform: translate3d(-100%, 0, 0);
      `;
    }
    if (position === 'top') {
      return css`
        inset: 0 0 auto 0;
        height: ${size};
        transform: translate3d(0, -100%, 0);
      `;
    }
    if (position === 'bottom') {
      return css`
        inset: auto 0 0 0;
        height: ${size};
        transform: translate3d(0, 100%, 0);
      `;
    }
    return null;
  }}

  ${({ position, level = 0 }) => {
    let transform = '0, 0, 0';
    if (level > 0) {
      const levelSize = `${80 * level}px`;

      if (position === 'right') {
        transform = `-${levelSize}, 0, 0`;
      } else if (position === 'left') {
        transform = `${levelSize}, 0, 0`;
      } else if (position === 'top') {
        transform = `0, ${levelSize}, 0`;
      } else if (position === 'bottom') {
        transform = `0, -${levelSize}, 0`;
      }
    }

    return css`
      &.enter {
        transform: translate3d(${transform});
      }
    `;
  }}

  ${({ disablePadding = false, theme }) =>
    !disablePadding &&
    css`
      padding: ${theme.spacing.get(4, 6)};
    `}
`;

export const DrawerBackdrop = styled.div<{ blur?: boolean }>`
  position: absolute;
  inset: 0;
  opacity: 0;
  background-color: rgba(34, 34, 34, 0.1);
  transition: opacity 0.3s ease-in-out;

  &.enter {
    opacity: 1;
  }
  ${({ blur }) =>
    blur &&
    css`
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
    `}
`;

export const DrawerWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${(p) => p.theme.zIndex.drawer};
`;
