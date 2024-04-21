/* eslint-disable @typescript-eslint/no-explicit-any */
import { Listener, generateUUID } from '@easypizi/common';
import type { ComponentType } from 'react';
import type { BaseModalProps } from './types';

export interface OpenModalEventData {
  id: string;
  ModalComponent: any;
  props: any;
  containerId?: string;
}

interface EventMap {
  open: OpenModalEventData;
}

class ModalsService extends Listener<EventMap> {
  open = <Props extends BaseModalProps>(
    ModalComponent: ComponentType<Props>,
    props: Props,
    containerId?: string,
  ) => {
    const id = generateUUID();
    this.trigger('open', {
      id,
      ModalComponent,
      props,
      containerId,
    });
  };
}

export const modalsService = new ModalsService();
