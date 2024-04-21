import { Template } from './Template.stories';
import { coloredChildren } from './helper';

export const Direction = Template.bind({});

Direction.args = {
  gap: 2,
  direction: 'row',
  children: coloredChildren,
};
