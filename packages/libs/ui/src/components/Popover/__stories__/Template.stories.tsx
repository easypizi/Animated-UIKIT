import type { StoryFn } from '@storybook/react';
import { useMemo, useState, type FC } from 'react';
import { Popover, PopoverActions } from '..';
import { TextInput } from '../../inputs';
import { Button } from '../../Button';

const Form: FC<{
  value: string;
  onSave: (value: string) => void;
  onCancel: () => void;
}> = (props) => {
  const { value: defaultValue, onSave, onCancel } = props;
  const [value, setValue] = useState(defaultValue);

  return (
    <div>
      <TextInput
        placeholder="Value"
        fullWidth
        value={value}
        onChangeText={setValue}
      />
      <PopoverActions>
        <Button size="xs" color="base" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="xs" onClick={() => onSave(value)}>
          Accept
        </Button>
      </PopoverActions>
    </div>
  );
};

export const Template: StoryFn<typeof Popover> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('Example Popover');

  const content = useMemo(() => {
    return (
      <Form
        value={value}
        onSave={(newValue: string) => {
          setValue(newValue);
          setIsOpen(false);
        }}
        onCancel={() => setIsOpen(false)}
      />
    );
  }, [value]);

  return (
    <div style={{ padding: '140px' }}>
      <Popover
        {...args}
        content={content}
        isOpen={isOpen}
        isOpenChange={setIsOpen}
        width="320px"
      >
        <button type="button">{value}</button>
      </Popover>
    </div>
  );
};

Template.args = {
  title: 'Popover title',
  arrow: true,
};
