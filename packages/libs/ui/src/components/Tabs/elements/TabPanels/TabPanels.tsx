import { useState, type FC, type ReactNode, useEffect } from 'react';
import { Panel } from './Panel';
import type { TabPanelEffect } from './types';
import { TabPanelsWrapper } from './styled';

interface TabPanelsProps {
  activeIndex: number;
  children: ReactNode[];
  notSaveState?: boolean;
  scrollable?: boolean;
  effect?: TabPanelEffect;
  onTabChange?: () => void;
}

export const TabPanels: FC<TabPanelsProps> = ({
  children = [],
  effect = 'fade',
  activeIndex,
  notSaveState = false,
  scrollable = false,
  onTabChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(activeIndex);

  useEffect(() => {
    setSelectedIndex(activeIndex);
    onTabChange?.();
  }, [activeIndex, onTabChange]);

  if (!children || !children.length) {
    return null;
  }

  return (
    <TabPanelsWrapper scrollable={scrollable}>
      {children.map((element, index) => {
        const isActive = index === selectedIndex;
        return (
          <Panel
            // eslint-disable-next-line react/no-array-index-key
            key={`tab_panel_${index}`}
            effect={effect}
            notSaveState={notSaveState}
            isActive={isActive}
            elemIndex={index}
            selectedElemIndex={selectedIndex}
          >
            {element}
          </Panel>
        );
      })}
    </TabPanelsWrapper>
  );
};
