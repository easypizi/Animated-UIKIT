import styled, { css } from 'styled-components';
import type { ThemeTypographyKey } from '../../themes';

export type TagView = 'tag' | 'label';

export type TagColor = 'blue' | 'lightgray' | 'warning' | 'white' | 'lightblue';

export interface TagStyleProps {
  interactable?: boolean;
  color?: TagColor;
  view?: TagView;
  fontSize?: number;
  variant?: ThemeTypographyKey;
}

export const Tag = styled.span<TagStyleProps>`
  display: inline-block;

  ${({ theme, view, interactable = true, variant = 'textSMBold' }) => {
    let typography = theme.typography[variant];
    let borderRadius = '30px';
    let padding = theme.spacing.get(0.5, 3, 1);

    if (view === 'label') {
      typography = theme.typography[variant ?? 'textXSBold'];
      borderRadius = '8px';
      padding = theme.spacing.get(1, 2);
    }

    return css`
      ${typography}
      border-radius: ${borderRadius};
      padding: ${padding};
      cursor: ${interactable ? 'pointer' : 'auto'};
    `;
  }}

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}

  ${({ theme, color = 'lightgray' }) => {
    if (color === 'blue') {
      return css`
        color: ${theme.palette.neutral100};
        background: ${theme.palette.primary100};
      `;
    }

    if (color === 'lightblue') {
      return css`
        color: ${theme.palette.primary100};
        background: ${theme.palette.primary10};
      `;
    }

    if (color === 'lightgray') {
      return css`
        color: ${theme.palette.neutral5};
        background: ${theme.palette.neutral80};
      `;
    }

    if (color === 'warning') {
      return css`
        color: ${theme.palette.warning100};
        background: ${theme.palette.warning10};
      `;
    }

    if (color === 'white') {
      return css`
        color: ${theme.palette.neutral5};
        background: ${theme.palette.neutral100};
      `;
    }

    return '';
  }}
`;
