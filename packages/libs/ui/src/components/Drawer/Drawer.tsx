import { useCallback, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@easypizi/icons';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerWrapper,
  type DrawerContentProps,
  CloseIconButton,
} from './styled';
import { useTransitionStatus } from '../../hooks';
import type { BaseModalProps } from '../../containers';
import { useDrawerLevel } from './useDrawerLevel';

export interface DrawerProps
  extends BaseModalProps,
    Partial<DrawerContentProps> {
  autoLevel?: boolean;
  closeButton?: boolean;
  children?: ReactNode;
  className?: string;
  blur?: boolean;
}

export const Drawer: FC<DrawerProps> = ({
  isOpen = true,

  position = 'right',
  size = 'md',
  sizeValue = null,
  autoLevel = true,
  disablePadding = false,
  closeButton = true,
  blur = false,
  onClose,
  onAfterClose,
  children,
  ...rest
}) => {
  const { mounted, className: transitionCN } = useTransitionStatus(isOpen, {
    onUnmount: onAfterClose,
    duration: 300,
  });
  const level = useDrawerLevel(autoLevel, isOpen, position);

  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      if (onClose) {
        onClose();
      }
    },
    [onClose],
  );

  if (!mounted) {
    return null;
  }

  const content = (
    <DrawerWrapper {...rest}>
      <DrawerBackdrop
        onClick={handleClose}
        className={transitionCN}
        blur={blur}
      />
      <DrawerContent
        position={position}
        size={size}
        sizeValue={sizeValue}
        level={level}
        disablePadding={disablePadding}
        className={transitionCN}
      >
        {closeButton && (
          <CloseIconButton size="md" color="transparent" onClick={handleClose}>
            <CloseIcon />
          </CloseIconButton>
        )}
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );

  return <>{createPortal(content, document.body)}</>;
};
