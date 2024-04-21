import { forwardRef, type ReactNode } from 'react';
import type { TabPanelEffect } from './types';
import { PanelWrapper } from './styled';

interface PanelProps {
  isActive: boolean;
  children: ReactNode;
  notSaveState: boolean;
  effect: TabPanelEffect;
  selectedElemIndex: number;
  elemIndex: number;
}

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    { isActive, children, effect, selectedElemIndex, elemIndex, notSaveState },
    ref,
  ) => {
    return (
      <PanelWrapper
        ref={ref}
        isActive={isActive}
        effect={effect}
        notSaveState={notSaveState}
        elemIndex={elemIndex}
        selectedElemIndex={selectedElemIndex}
      >
        {children}
      </PanelWrapper>
    );
  },
);
