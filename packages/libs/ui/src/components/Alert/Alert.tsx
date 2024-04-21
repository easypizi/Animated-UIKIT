import { type ReactNode, useMemo } from 'react';
import {
  AlertIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  CloseIcon,
  InfoIcon,
} from '@easypizi/icons';
import type { FCWithAs } from '../../types';
import { IconHolder, StyledAlertWrapper, TextContainer } from './styled';
import type { AlertColor, AlertPreset } from './types';

export interface AlertProps {
  icon?: ReactNode;
  color?: AlertColor;
  preset?: AlertPreset;
  children?: ReactNode;
  onClose?: () => void;
  actions?: ReactNode;
}

const presetProps: Record<AlertPreset, Partial<AlertProps>> = {
  neutral: {
    color: 'neutral',
  },
  info: {
    color: 'info',
    icon: <InfoIcon />,
  },
  success: {
    color: 'success',
    icon: <CheckCircleIcon />,
  },
  error: {
    color: 'error',
    icon: <CloseCircleIcon />,
  },
  warning: {
    color: 'warning',
    icon: <AlertIcon />,
  },
};

export const Alert: FCWithAs<'div', AlertProps> = ({
  icon,
  color = 'info',
  preset,
  children,
  onClose,
  actions,
}) => {
  const merged = useMemo(() => {
    const presetData =
      preset && preset in presetProps ? presetProps[preset] : {};
    return {
      color: presetData.color ?? color,
      icon: icon === undefined ? presetData.icon : icon,
    };
  }, [preset, icon, color]);

  return (
    <StyledAlertWrapper color={merged.color}>
      {merged.icon && <IconHolder position="start">{merged.icon}</IconHolder>}
      <TextContainer>{children}</TextContainer>
      {actions && <IconHolder position="end">{actions}</IconHolder>}
      {onClose && (
        <IconHolder position="end" onClick={onClose}>
          <CloseIcon />
        </IconHolder>
      )}
    </StyledAlertWrapper>
  );
};
