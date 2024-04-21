/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
  type FC,
} from 'react';
import { modalsService, type OpenModalEventData } from './modalsService';
import { ModalWrapper } from './ModalWrapper';

type ModalItem = {
  id: string;
  content: ReactNode;
};

export interface ModalsContainerProps {
  containerId?: string | null;
}

export const ModalsContainer: FC<ModalsContainerProps> = (props) => {
  const { containerId = null } = props;
  const [modals, setModals] = useState<ModalItem[]>([]);

  const removeModal = useCallback((id: string) => {
    setModals((state) => state.filter((x) => x.id !== id));
  }, []);

  const onOpen = useCallback(
    (event: OpenModalEventData) => {
      const {
        id,
        ModalComponent,
        props: eventProps,
        containerId: eventContainerId = null,
      } = event;
      if (eventContainerId !== containerId) {
        return;
      }
      const content = (
        <ModalWrapper
          modalProps={eventProps}
          ModalComponent={ModalComponent}
          onAfterClose={() => removeModal(id)}
        />
      );
      setModals((state) => [
        ...state,
        {
          id,
          content,
        },
      ]);
    },
    [containerId, removeModal],
  );

  useEffect(() => {
    return modalsService.on('open', onOpen);
  }, [onOpen]);

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modals]);

  return (
    <>
      {modals.map((modal) => (
        <Fragment key={modal.id}>{modal.content}</Fragment>
      ))}
    </>
  );
};
