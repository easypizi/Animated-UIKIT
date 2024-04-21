import { Template } from './Template.stories';
import { coloredChildren } from './helper';

export const Gap = Template.bind({});

Gap.args = {
  gap: 6,
  children: coloredChildren,
};
