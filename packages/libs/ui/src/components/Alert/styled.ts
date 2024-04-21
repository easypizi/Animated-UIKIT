import styled, { css } from 'styled-components';
import type { AlertColor } from './types';

export const IconHolder = styled.div<{ position?: 'start' | 'end' }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.get(3)};
  flex-shrink: 0;
  cursor: pointer;
  pointer-events: auto;

  ${({ theme, position }) => {
    if (position === 'start') {
      return css`
        padding-right: ${theme.spacing.get(3)};
        &:last-child {
          padding-right: ${theme.spacing.get(4)};
        }
      `;
    }
    if (position === 'end') {
      return css`
        padding-left: ${theme.spacing.get(3)};
        &:first-child {
          padding-left: ${theme.spacing.get(4)};
        }
      `;
    }
    return '';
  }}
`;

export const TextContainer = styled.div`
  flex: 1;
  overflow: hidden;
  ${(p) => p.theme.typography.textSM};

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export interface StyledAlertProps {
  color: AlertColor;
}

export const StyledAlertWrapper = styled.div<StyledAlertProps>`
  width: 100%;
  display: flex;
  align-items: center;
  pointer-events: auto;

  ${({ theme, color }) => {
    let textColor = theme.palette.neutral10;
    let background = theme.palette.neutral60;

    if (color === 'error') {
      textColor = theme.palette.danger100;
      background = theme.palette.danger10;
    }

    if (color === 'warning') {
      textColor = theme.palette.warning100;
      background = theme.palette.warning10;
    }

    if (color === 'success') {
      textColor = theme.palette.success100;
      background = theme.palette.success10;
    }

    if (color === 'info') {
      textColor = theme.palette.neutral100;
      background = theme.palette.neutral5;
    }

    return css`
      color: ${textColor};
      background: ${background};
      padding: ${theme.spacing.get(3, 4)};
      border-radius: ${theme.spacing.get(3)};
    `;
  }}
`;
