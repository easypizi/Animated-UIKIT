import { PlusIcon } from '@easypizi/icons';
import { Template } from './Template.stories';

export const Playground = Template.bind({});

Playground.args = {
  children: 'simple friendly alert',
  icon: <PlusIcon />,
  onClose: () => {},
};
