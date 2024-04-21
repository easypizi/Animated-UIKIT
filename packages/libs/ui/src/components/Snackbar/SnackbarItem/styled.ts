import styled, { type Keyframes, css, keyframes } from 'styled-components';
import type { SnackbarAnimation } from '../types';

const fadeAnimEnter = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeAnimLeave = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideLeftAnimEnter = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideLeftAnimLeave = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const slideRightAnimEnter = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideRightAnimLeave = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const animationsMap: Record<SnackbarAnimation, [Keyframes, Keyframes]> = {
  fade: [fadeAnimEnter, fadeAnimLeave],
  'slide-left': [slideLeftAnimEnter, slideLeftAnimLeave],
  'slide-right': [slideRightAnimEnter, slideRightAnimLeave],
};

export const Root = styled.div<{ animation?: SnackbarAnimation }>`
  animation: ${fadeAnimEnter} 0.3s ease-in-out forwards;
  transition: height 0.2s ease-in;

  &._leave {
    animation: ${fadeAnimLeave} 0.3s ease-in-out forwards;
  }

  ${({ animation = 'fade' }) => {
    const [enter, leave] = animationsMap[animation] || animationsMap.fade;

    return css`
      animation: ${enter} 0.3s ease-in-out forwards;

      &._leave {
        animation: ${leave} 0.3s ease-in-out forwards;
      }
    `;
  }}
`;
