import styled, { css, type CSSProperties } from 'styled-components';
import type { ThemeTypographyKey, ThemePaletteKey } from '../../themes';

export interface TypographyProps {
  variant?: ThemeTypographyKey;
  color?: ThemePaletteKey | string | 'inherit';
  textAlign?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
}

export const Typography = styled.span<TypographyProps>`
  ${({
    theme,
    variant = 'base',
    color = 'inherit',
    textAlign = 'inherit',
    whiteSpace = 'inherit',
  }) => css`
    ${theme.typography[variant]}
    color: ${color in theme.palette ? theme.palette[color] : color};
    text-align: ${textAlign};
    white-space: ${whiteSpace};
  `}
`;
