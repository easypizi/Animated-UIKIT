import type { StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Popper } from '..';

export const Template: StoryFn<typeof Popper> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ padding: '100px' }}>
      <Popper {...args} isOpen={isOpen} isOpenChange={setIsOpen}>
        <button type="button">Example Popper</button>
      </Popper>
    </div>
  );
};

Template.args = {
  content: 'Popper content',
};
