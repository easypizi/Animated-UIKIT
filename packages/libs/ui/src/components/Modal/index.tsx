import { type ReactNode, useCallback, type FC, memo } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@easypizi/icons';
import type { BaseModalProps } from '../../containers';
import { useTransitionStatus } from '../../hooks';
import { IconButton } from '../IconButton';
import {
  StyledModalContent,
  type StyledModalContentProps,
  StyledModalWrapper,
  StyledCloseButtonContainer,
  StyledModalBackdrop,
} from './styled';

export interface ModalProps extends BaseModalProps, StyledModalContentProps {
  children: ReactNode;
  topOffset?: number;
  showClose?: boolean;
  showBackdrop?: boolean;
  closeOnBackdrop?: boolean;
  noPadding?: boolean;
  portal?: boolean;
}

export const Modal: FC<ModalProps> = memo(
  ({
    children,
    isOpen = true,
    size = 'md',
    width,
    topOffset,
    portal = true,
    showClose = true,
    showBackdrop = true,
    closeOnBackdrop = true,
    noPadding,
    onClose,
    onAfterClose,
  }) => {
    const { mounted, className: transitionCN } = useTransitionStatus(isOpen, {
      onUnmount: onAfterClose,
      duration: 300,
    });

    const closeModalHandler = useCallback(() => {
      if (onClose) {
        onClose();
      }
    }, [onClose]);

    if (!mounted) {
      return null;
    }

    const modal = (
      <StyledModalWrapper topOffset={topOffset}>
        <StyledModalBackdrop
          showBackdrop={showBackdrop}
          onClick={closeOnBackdrop ? closeModalHandler : undefined}
          className={transitionCN}
        />
        <StyledModalContent
          size={size}
          width={width}
          noPadding={noPadding}
          className={transitionCN}
        >
          {showClose && onClose && (
            <StyledCloseButtonContainer>
              <IconButton color="transparent" onClick={closeModalHandler}>
                <CloseIcon fontSize={24} />
              </IconButton>
            </StyledCloseButtonContainer>
          )}
          {children}
        </StyledModalContent>
      </StyledModalWrapper>
    );

    if (portal) {
      return createPortal(modal, document.body);
    }

    return modal;
  },
);
