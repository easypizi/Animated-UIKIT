import styled, { css } from 'styled-components';
import type { ThemePaletteKey } from '../../themes';

export interface StyledAccordeonProps {
  isOpen?: boolean;
  color?: ThemePaletteKey | 'inherit';
  padding?: {
    top?: number;
    side?: number;
    bottom?: number;
  };
}

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  margin-right: ${({ theme }) => theme.spacing.get(3)};
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
`;

export const AccordionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AccordionContent = styled.div``;

export const AccordionContainer = styled.div<StyledAccordeonProps>`
  width: 100%;
  color: ${({ theme, color }) =>
    color && color in theme.palette
      ? theme.palette[color]
      : theme.palette.neutral10};

  ${({ theme, padding }) => {
    if (padding && AccordionHeader) {
      const { top, side, bottom } = padding;

      return css`
        ${AccordionHeader} {
          padding: ${theme.spacing.get(top ?? 0, side ?? 0, bottom ?? 0)};
        }
      `;
    }
    return '';
  }}

  ${({ isOpen }) =>
    !isOpen &&
    css`
      ${IconWrapper} {
        transform: rotate(0deg);
      }
      ${AccordionContent} {
        display: none !important;
      }
    `}
`;
