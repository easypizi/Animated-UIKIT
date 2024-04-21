/* eslint-disable react/no-array-index-key */
import { type FC, type ReactNode, useState } from 'react';
import { Tab, TabsInnerWrapper, TabsOuterWrapper } from './styled';

export interface TabsProps {
  tabs: ReactNode[];
  activeIndex?: number;
  onChange?: (index: number) => void;
}

export const Tabs: FC<TabsProps> = ({ tabs, activeIndex = 0, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(activeIndex);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    if (onChange) {
      onChange(index);
    }
  };

  const wrappedTabLinks = tabs.map((element, index) => (
    <Tab
      key={`tabButton_${index}`}
      onClick={() => handleClick(index)}
      className={selectedIndex === index ? 'active' : ''}
    >
      {element}
    </Tab>
  ));

  return (
    <TabsOuterWrapper>
      <TabsInnerWrapper>{wrappedTabLinks}</TabsInnerWrapper>
    </TabsOuterWrapper>
  );
};
