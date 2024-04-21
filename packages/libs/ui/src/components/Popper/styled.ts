import { FloatingArrow } from '@floating-ui/react';
import styled from 'styled-components';

export const Container = styled.div`
  background: var(--popper-background-color, transparent);
  overflow: visible;
`;

export const Arrow = styled(FloatingArrow)`
  fill: var(--popper-background-color, transparent);
`;
