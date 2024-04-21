import styled, { css } from 'styled-components';
import type { ThemePaletteKey, ThemeTypographyKey } from '../../themes';
import { Typography } from '../Typography';

export interface StyledSelectProps {
  opened?: boolean;
  noBorder?: boolean;
  fullWidth?: boolean;
  optionsVariant?: ThemeTypographyKey;
}

export const SelectButton = styled.button<{
  error?: boolean | string;
  fullWidth?: boolean;
}>`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: unset;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  overflow: hidden;
  ${({ theme }) => css`
    padding: ${theme.spacing.get(2)};
    border: 1px solid ${theme.palette.neutral60};
    border-radius: ${theme.spacing.get(2)};
    gap: ${theme.spacing.get(0.5)};
  `}

  ${({ theme, error }) =>
    error &&
    css`
      border: 1px solid ${theme.palette.danger100};
    `}
`;

export const SelectButtonText = styled(Typography)`
  ${({ theme }) => css`
    ${theme.typography.textXS};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.spacing.get(4)};
    display: flex;
    align-items: center;
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 20px;
    flex-shrink: 0;
    background: ${theme.palette.neutral60};
    margin-left: auto;
    margin-right: 4px;
  `}
`;

export const ButtonIconContainer = styled(IconContainer)`
  flex-shrink: 0;
  transition: transform 0.3s ease-out;
`;

export const CheckedIconContainer = styled(IconContainer)`
  ${({ theme }) => css`
    color: ${theme.palette.primary100};
    margin-left: ${theme.spacing.get(1)};
    font-size: inherit;
  `}
`;

export const Option = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    ${theme.typography.textXS};
    padding: ${theme.spacing.get(1, 4)};

    &:hover {
      background: ${theme.palette.neutral80};
    }
  `}
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.6;
  display: none;
  ${({ theme }) => css`
    background: ${theme.palette.background.overlay};
    z-index: ${theme.zIndex.drawer};
  `}
`;

export const OptionsContainer = styled.div<{
  withoutBackdrop?: boolean;
  height?: string;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: fit-content;
  overflow: hidden;
  ${({ theme }) => css`
    z-index: ${theme.zIndex.modal};
    top: ${theme.spacing.get(10)};
    padding: ${theme.spacing.get(2, 0)};
    background: ${theme.palette.neutral100};
    border-radius: ${theme.spacing.get(6)};
    box-shadow: 0 0 ${theme.spacing.get(2.5)} 0 ${theme.palette.neutral80};
    border: 1px solid ${theme.palette.neutral60};
  `}

  ${({ height }) =>
    height &&
    css`
      max-height: ${height};
      overflow: auto;
    `}

  ${({ theme, withoutBackdrop }) =>
    !withoutBackdrop &&
    css`
      ${theme.breakpoints.down('md')} {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        top: unset;
        padding: ${theme.spacing.get(4, 6, 6)};
        border-radius: ${theme.spacing.get(6, 6, 0, 0)};
        box-shadow: unset;
      }
    `}
`;

export const Title = styled(Typography)<{
  titleVariant?: ThemeTypographyKey;
  titleColor?: ThemePaletteKey;
}>`
  ${({ theme, titleVariant = 'textXSBold', titleColor = 'neutral5' }) => css`
    ${theme.typography[titleVariant]};
    display: block;
    flex-shrink: 0;
    color: ${theme.palette[titleColor]};
    padding: ${theme.spacing.get(0, 2)};
  `}
`;

export const StyledSelect = styled.div<StyledSelectProps>`
  position: relative;

  ${({ theme, optionsVariant }) =>
    optionsVariant &&
    css`
      ${ButtonIconContainer} {
        ${theme.typography[optionsVariant]}
      }

      ${SelectButton} {
        ${theme.typography[optionsVariant]}
      }

      ${Option} {
        ${theme.typography[optionsVariant]}
      }
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;

      ${OptionsContainer} {
        width: 100%;
      }
    `}

  ${({ noBorder }) =>
    noBorder &&
    css`
      ${SelectButton} {
        border: 0;
      }
    `}

  ${({ opened }) =>
    opened &&
    css`
      ${ButtonIconContainer} {
        transform: rotate(-180deg);
      }

      ${StyledOverlay} {
        opacity: 0.6;
        display: block;
      }
    `}
`;

export const ErrorMessage = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing.get(1, 4, 0)};
    ${theme.typography.textXSBold};
    color: ${theme.palette.danger100};
  `,
);
