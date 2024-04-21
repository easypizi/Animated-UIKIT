import styled, { css } from 'styled-components';
import type { ThemePaletteKey } from '../../themes';

export type DividerProps = {
  color?: ThemePaletteKey;
  dotted?: boolean;
};

export const Divider = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  position: relative;
  ${({ theme, color }) => css`
    background: ${color ? theme.palette[color] : theme.palette.neutral60};
    margin: ${theme.spacing.get(4, 0)};
    border-radius: ${theme.spacing.get(3)};
  `}

  ${({ theme, dotted }) =>
    dotted &&
    css`
      &:before {
        content: '';
        display: block;
        width: ${theme.spacing.get(2.5)};
        height: ${theme.spacing.get(2.5)};
        background: ${theme.palette.neutral60};
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: ${theme.spacing.get(-1.25)};
        margin-top: ${theme.spacing.get(-1.25)};
        border-radius: 50%;
        box-shadow: 0 0 0 4px ${theme.palette.neutral100};
      }
    `}
`;
