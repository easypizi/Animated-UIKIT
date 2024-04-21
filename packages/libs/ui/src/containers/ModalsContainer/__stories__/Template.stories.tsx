import type { StoryFn } from '@storybook/react';
import { useCallback, useState } from 'react';
import { ModalsContainer, modalsService } from '..';
import { DemoModal1 } from './DemoModals';

export const Template: StoryFn<typeof ModalsContainer> = () => {
  const [value, setValue] = useState('Sample value');

  const open = useCallback(() => {
    modalsService.open(DemoModal1, {
      value,
      onSave: setValue,
    });
  }, [value]);

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={open}>Open modal</button>
      <ModalsContainer />
    </div>
  );
};

Template.args = {};
