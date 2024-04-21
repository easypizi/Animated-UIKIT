import styled, { css } from 'styled-components';

const sizes = {
  xs: 280,
  sm: 335,
  md: 540,
  lg: 720,
  xl: 960,
  full: '100%',
  auto: 'auto',
};

export type ModalSize = keyof typeof sizes;

export interface StyledModalContentProps {
  size?: ModalSize;
  width?: string | number | null;
  noPadding?: boolean;
}

export const StyledModalContent = styled.div<StyledModalContentProps>`
  position: relative;
  max-width: 100%;
  opacity: 0;
  transform: translate3d(0, 16px, 0);
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  overflow: hidden;

  &.enter {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  ${({ theme, size = 'auto', width, noPadding }) => {
    let widthValue = width || sizes[size];
    if (typeof widthValue === 'number') {
      widthValue = `${widthValue}px`;
    }

    return css`
      width: ${widthValue};
      background: ${theme.palette.background.main};
      padding: ${noPadding ? '0' : theme.spacing.get(8, 6)};
      border-radius: ${theme.spacing.get(6)};
      z-index: ${theme.zIndex.popper};
    `;
  }}
`;

export const StyledModalWrapper = styled.div<{ topOffset?: number }>`
  position: fixed;
  inset: 0;
  z-index: ${(p) => p.theme.zIndex.modal};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.spacing.get(4)};
  overflow-y: auto;

  ${({ topOffset }) =>
    topOffset &&
    css`
      align-items: flex-start;
      padding-top: ${topOffset}px;
    `}
`;

export const StyledModalBackdrop = styled.div<{ showBackdrop?: boolean }>`
  position: fixed;
  inset: 0;
  opacity: 0;
  background-color: ${(p) => (p.showBackdrop ? '#222222' : 'transparent')};
  transition: opacity 0.3s ease-in-out;

  &.enter {
    opacity: 0.6;
  }
`;

export const StyledCloseButtonContainer = styled.div`
  position: absolute;
  z-index: 10;
  ${({ theme }) => css`
    top: ${theme.spacing.get(2.5)};
    right: ${theme.spacing.get(2.5)};
    font-size: ${theme.spacing.get(6)};
  `}
`;
