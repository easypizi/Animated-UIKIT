import { Template } from './Template.stories';
import { coloredChildren } from './helper';

export const Playground = Template.bind({});

Playground.args = {
  children: coloredChildren,
  gap: 2,
};
