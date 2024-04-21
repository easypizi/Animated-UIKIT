import { useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { ImageIcon } from '@easypizi/icons';
import { FileInput } from '../FileInput';
import { Stack } from '../../../Stack';

export const Showcase: StoryFn<typeof FileInput> = () => {
  const [singleValue, setSingleValue] = useState<File | null>(null);
  const [multipleValue1, setMultipleValue1] = useState<Array<File> | null>(
    null,
  );
  const [multipleValue2, setMultipleValue2] = useState<Array<File> | null>(
    null,
  );

  return (
    <Stack gap={4} direction="column" alignItems="stretch">
      <FileInput value={singleValue} onChange={setSingleValue} label="Single" />
      <FileInput
        value={multipleValue1}
        onChange={setMultipleValue1}
        label="Multiple"
        multiple
      />
      <FileInput
        value={multipleValue2}
        onChange={setMultipleValue2}
        label="Multiple"
        labelIcon={<ImageIcon />}
        description="Image only"
        placeholder="Upload images"
        multiple
        accept="image/*"
      />
    </Stack>
  );
};

Showcase.args = {};
