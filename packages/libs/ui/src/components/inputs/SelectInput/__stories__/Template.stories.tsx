import { useCallback, useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { SelectInput } from '..';

export const Template: StoryFn<typeof SelectInput> = (args) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <div>
      <SelectInput {...args} value={value} onChange={onChange as never} />
      Value: {JSON.stringify(value)}
    </div>
  );
};

Template.args = {
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};
