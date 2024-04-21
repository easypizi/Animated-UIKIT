import { Template } from './Template.stories';
import { coloredChildren } from './helper';

export const AlignItems = Template.bind({});

AlignItems.args = {
  children: coloredChildren,
  gap: 2,
  alignItems: 'center',
};
