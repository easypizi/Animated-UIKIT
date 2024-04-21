import { useState, type ComponentType, type FC, useCallback } from 'react';
import type { BaseModalProps } from './types';

export interface ModalWrapperProps {
  modalProps: BaseModalProps & Record<string, unknown>;
  ModalComponent: ComponentType<BaseModalProps>;
  onAfterClose: () => void;
}

export const ModalWrapper: FC<ModalWrapperProps> = (props) => {
  const { modalProps, ModalComponent, onAfterClose } = props;
  const [isOpen, setIsOpen] = useState(true);

  const onClose = useCallback(() => {
    setIsOpen(false);
    if (modalProps.onClose) {
      modalProps.onClose();
    }
  }, [modalProps]);

  return (
    <ModalComponent
      {...modalProps}
      isOpen={isOpen}
      onClose={onClose}
      onAfterClose={onAfterClose}
    />
  );
};
