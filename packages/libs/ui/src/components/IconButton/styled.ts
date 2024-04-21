/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import type { IconButtonBaseProps } from './types';

export const Shape = styled.span`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.span`
  line-height: 0;
  opacity: 1;
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

export const Label = styled.span``;

const BaseButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['loading', 'labelPosition'].includes(prop),
})<IconButtonBaseProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: inherit;
  transition-property: opacity, color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  ${({ labelPosition }) => {
    if (labelPosition === 'left') {
      return css`
        flex-direction: row-reverse;
      `;
    }
    if (labelPosition === 'bottom') {
      return css`
        flex-direction: column;
        ${Label} {
          align-self: center;
          max-width: 80%;
        }
      `;
    }
    return css`
      flex-direction: row;
    `;
  }}

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  ${({ theme, size }) => {
    let iconSize = '16px';
    let typography = theme.typography.base;
    let gap = 1;
    if (size === 'xs') {
      typography = theme.typography.textXSBold;
      gap = 2;
    } else if (size === 'sm') {
      typography = theme.typography.textSMBold;
      gap = 2.5;
    } else if (size === 'md') {
      iconSize = '20px';
      typography = theme.typography.textMDBold;
      gap = 3;
    }
    return css`
      gap: ${theme.spacing.get(gap)};
      ${Content} {
        font-size: ${iconSize};
      }
      ${Label} {
        ${typography}
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
      ${Label} {
        opacity: 0.4;
      }
    `}
`;

export const ContainedButton = styled(BaseButton)`
  ${({ theme, size }) => {
    if (size === 'xs') {
      return css`
        ${Shape} {
          width: 33px;
          height: 33px;
          border-radius: ${theme.spacing.get(2)};
        }
      `;
    }
    if (size === 'sm') {
      return css`
        ${Shape} {
          width: 44px;
          height: 44px;
          border-radius: ${theme.spacing.get(2)};
        }
      `;
    }
    if (size === 'md') {
      return css`
        ${Shape} {
          width: 54px;
          height: 54px;
          border-radius: ${theme.spacing.get(3)};
        }
      `;
    }
    return '';
  }}

  ${({ theme, disabled, color }) => {
    if (disabled) {
      return css`
        ${Shape} {
          color: ${theme.palette.neutral100};
          background-color: ${theme.palette.neutral40};
        }
        ${Label} {
          color: ${theme.palette.neutral20};
        }
      `;
    }

    if (color === 'transparent') {
      return css`
        ${Shape} {
          color: ${theme.palette.neutral20};
          background-color: transparent;
        }
        ${Label} {
          color: ${theme.palette.neutral5};
        }
      `;
    }

    if (color === 'primary') {
      return css`
        ${Shape} {
          color: ${theme.palette.neutral100};
          background-color: ${theme.palette.primary100};
        }
        ${Label} {
          color: ${theme.palette.primary100};
        }
      `;
    }
    if (color === 'danger') {
      return css`
        ${Shape} {
          color: ${theme.palette.neutral100};
          background-color: ${theme.palette.danger100};
        }
        ${Label} {
          color: ${theme.palette.danger100};
        }
      `;
    }
    if (color === 'base') {
      return css`
        ${Shape} {
          color: ${theme.palette.neutral5};
          background-color: ${theme.palette.neutral80};
        }
        ${Label} {
          color: ${theme.palette.neutral5};
        }
      `;
    }

    if (color === 'light') {
      return css`
        ${Shape} {
          color: ${theme.palette.neutral10};
          background-color: ${theme.palette.neutral100};
        }
        ${Label} {
          color: ${theme.palette.neutral5};
        }
      `;
    }
    return '';
  }}
`;
