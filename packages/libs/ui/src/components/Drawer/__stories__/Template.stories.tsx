import type { StoryFn } from '@storybook/react';
import { useCallback, useState } from 'react';
import { Drawer } from '..';

export const Template: StoryFn<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <button onClick={open}>Open drawer</button>
      <Drawer {...args} isOpen={isOpen} onClose={close} />
    </div>
  );
};

Template.args = {
  children: <div>Drawer content example</div>,
};
