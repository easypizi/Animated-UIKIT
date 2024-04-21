import { useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { AlertIcon, ImageIcon } from '@easypizi/icons';
import { FileInput } from '../FileInput';
import type { FileObject, FileProvider } from '../types';
import { Stack } from '../../../Stack';
import { Typography } from '../../../Typography';

const customProvider: FileProvider = {
  id: 'custom',
  placeholder: {
    icon: <AlertIcon />,
    text: 'Custom',
    onClick: async () => {
      // eslint-disable-next-line no-alert
      const result = window.prompt('Set url', '');
      if (result) {
        return {
          url: result,
        };
      }
      return null;
    },
  },
};

export const Providers: StoryFn<typeof FileInput> = () => {
  const [value, setValue] = useState<Array<FileObject> | null>([]);

  return (
    <Stack gap={3}>
      <FileInput
        label="File providers"
        labelIcon={<ImageIcon />}
        description="Use custom providers for append files"
        placeholder="Upload"
        multiple
        useObjects
        showUrlSetter
        providers={[customProvider]}
        value={value}
        onChange={setValue}
      />
      <div>
        <Typography variant="headerXS">Value:</Typography>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </Stack>
  );
};

Providers.args = {};
