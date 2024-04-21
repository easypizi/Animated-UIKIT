import styled, { css } from 'styled-components';
import type { ButtonBaseProps } from './types';

export const Content = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 1;
  white-space: nowrap;
`;

export const LoaderWrapper = styled.span`
  display: flex;
  position: absolute;
  inset: 0;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
`;

export const IconHolder = styled.span`
  line-height: 0;
`;

const BaseButton = styled.button.withConfig({
  shouldForwardProp: (props) => !['loading', 'fullWidth'].includes(props),
})<ButtonBaseProps>`
  position: relative;
  display: inline-block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 0;
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  transition-property: opacity, color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  ${({ theme, size }) => {
    let typography = theme.typography.base;
    let gap = 1;
    let iconSize = 16;
    if (size === 'xs') {
      typography = theme.typography.textXSBold;
      gap = 2;
    } else if (size === 'sm') {
      typography = theme.typography.textSMBold;
      gap = 2.5;
    } else if (size === 'md') {
      typography = theme.typography.textMDBold;
      gap = 3;
      iconSize = 20;
    }
    return css`
      ${typography}
      ${Content} {
        gap: ${theme.spacing.get(gap)};
      }
      ${IconHolder} {
        font-size: ${iconSize}px;
      }
    `;
  }}

  ${({ disabled, loading }) =>
    (disabled || loading) &&
    css`
      pointer-events: none;
    `}

  ${({ loading }) =>
    loading &&
    css`
      ${LoaderWrapper} {
        opacity: 1;
      }
      ${Content} {
        opacity: 0;
      }
    `}
`;

export const ContainedButton = styled(BaseButton)`
  ${({ theme, size }) => {
    if (size === 'xs') {
      return css`
        padding: ${theme.spacing.get(2, 4)};
        border-radius: ${theme.spacing.get(2)};
      `;
    }
    if (size === 'sm') {
      return css`
        padding: ${theme.spacing.get(3, 5)};
        border-radius: ${theme.spacing.get(2)};
      `;
    }
    if (size === 'md') {
      return css`
        padding: ${theme.spacing.get(4, 6)};
        border-radius: ${theme.spacing.get(3)};
      `;
    }
    return '';
  }}

  ${({ theme, disabled, color }) => {
    if (disabled) {
      return css`
        color: ${theme.palette.neutral100};
        background-color: ${theme.palette.neutral40};
      `;
    }
    if (color === 'primary') {
      return css`
        color: ${theme.palette.neutral100};
        background-color: ${theme.palette.primary100};
      `;
    }
    if (color === 'danger') {
      return css`
        color: ${theme.palette.neutral100};
        background-color: ${theme.palette.danger100};
      `;
    }
    if (color === 'base') {
      return css`
        color: ${theme.palette.neutral5};
        background-color: ${theme.palette.neutral80};
      `;
    }
    if (color === 'light') {
      return css`
        color: ${theme.palette.neutral5};
        background-color: ${theme.palette.neutral100};
      `;
    }
    if (color === 'dark') {
      return css`
        color: ${theme.palette.neutral100};
        background-color: ${theme.palette.neutral5};
      `;
    }
    return '';
  }}
`;

export const TextButton = styled(BaseButton)`
  text-decoration: none;

  ${({ theme, disabled, color }) => {
    if (disabled) {
      return css`
        color: ${theme.palette.neutral20};
      `;
    }
    if (color === 'primary') {
      return css`
        color: ${theme.palette.primary100};
      `;
    }
    if (color === 'danger') {
      return css`
        color: ${theme.palette.danger100};
      `;
    }
    if (color === 'base') {
      return css`
        color: ${theme.palette.neutral5};
      `;
    }

    if (color === 'light') {
      return css`
        color: ${theme.palette.neutral20};
      `;
    }
    if (color === 'dark') {
      return css`
        color: ${theme.palette.neutral100};
      `;
    }
    return '';
  }}

  ${({ loading }) =>
    loading &&
    css`
      ${Content} {
        opacity: 0.1;
      }
    `}
`;
