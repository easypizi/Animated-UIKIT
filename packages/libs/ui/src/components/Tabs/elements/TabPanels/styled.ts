import styled, { css, keyframes } from 'styled-components';
import type { TabPanelEffect } from './types';

const opacityAnmation = keyframes`
  0% {
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const TabPanelsWrapper = styled.div<{ scrollable?: boolean }>`
  width: 100%;
  position: relative;
  ${({ scrollable = false }) => css`
    overflow: ${scrollable ? 'auto' : 'hidden'};
  `}
`;

export const PanelWrapper = styled.div<{
  effect: TabPanelEffect;
  isActive: boolean;
  notSaveState: boolean;
  elemIndex: number;
  selectedElemIndex: number;
}>`
  width: 100%;
  max-height: 100%;
  overflow: auto;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
  will-change: visibility, opacity, transform;

  ${({ effect, elemIndex, selectedElemIndex }) =>
    effect === 'transform' &&
    css`
      transform: translateX(${(elemIndex - selectedElemIndex) * 100}%);
      transition: all 0.2s ease-in-out;
    `}

  ${({ notSaveState }) =>
    notSaveState &&
    css`
      display: none;
      opacity: 0;
    `}

  ${({ isActive, effect }) => {
    if (isActive && effect === 'fade') {
      return css`
        opacity: 1;
        z-index: 10;
        pointer-events: auto;
        position: static;
        display: block;
      `;
    }

    if (isActive && effect === 'transform') {
      return css`
        transition: transform 0.2s ease-in-out;
        opacity: 1;
        z-index: 10;
        transform: translateX(0%);
        pointer-events: auto;
        position: static;
        display: block;
      `;
    }

    return ``;
  }}

${({ isActive, notSaveState }) =>
    isActive &&
    notSaveState &&
    css`
      animation: ${opacityAnmation} 0.3s ease-in-out forwards;
    `}
`;
