import { Template } from './Template.stories';
import { coloredChildren } from './helper';

export const JustifyContent = Template.bind({});

JustifyContent.args = {
  direction: 'row',
  justifyContent: 'space-between',
  children: coloredChildren,
};
