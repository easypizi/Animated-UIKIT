import { useCallback, useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { SettingsIcon } from '@easypizi/icons';
import { TextInput } from '..';
import { Stack } from '../../../Stack';

export const Showcase: StoryFn<typeof TextInput> = (args) => {
  const [value, setValue] = useState('');
  const [success, setSuccessStatus] = useState<string | boolean>(false);

  const handleChangeText = useCallback((text: string) => {
    setSuccessStatus(false);
    setValue(text);
  }, []);

  const handleActionClick = useCallback(() => {
    setSuccessStatus('Action successfully clicked!');
  }, []);

  return (
    <Stack gap={4} direction="column" alignItems="flex-start">
      <TextInput {...args} label={undefined} />
      <TextInput {...args} />
      <TextInput {...args} error />
      <TextInput {...args} error="Error message" />
      <TextInput {...args} startIcon={<SettingsIcon />} />
      <TextInput {...args} endIcon={<SettingsIcon />} />
      <TextInput {...args} allowClear value={value} onChangeText={setValue} />
      <TextInput {...args} success />
      <TextInput {...args} success="Success message" />
      <TextInput
        {...args}
        allowAction
        value={value}
        onChangeText={handleChangeText}
        success={success}
        onAction={handleActionClick}
      />
      <TextInput
        {...args}
        allowClear
        value={value}
        onChangeText={setValue}
        endIcon={<SettingsIcon />}
      />
    </Stack>
  );
};

Showcase.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};
