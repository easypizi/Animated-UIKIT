import { type CSSProperties, type ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface StackProps {
  gap?: number;
  direction?: 'row' | 'column' | 'row-reverse';
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  wrap?: boolean | CSSProperties['flexWrap'];
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const Stack = styled.div<StackProps>`
  display: flex;
  ${({
    theme,
    gap = 0,
    direction = 'column',
    alignItems = 'normal',
    justifyContent = 'normal',
    wrap = 'nowrap',
  }) => css`
    gap: ${theme.spacing.get(gap)};
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${typeof wrap === 'boolean' ? 'wrap' : wrap};
  `}
`;
