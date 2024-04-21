import { useCallback, useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { ImageIcon } from '@easypizi/icons';
import { FileInput } from '../FileInput';
import type { FileObject } from '../types';
import { Stack } from '../../../Stack';
import { Typography } from '../../../Typography';

export const Upload: StoryFn<typeof FileInput> = () => {
  const [value, setValue] = useState<Array<FileObject> | null>([
    {
      id: Math.random(),
      url: 'https://picsum.photos/500/500',
      type: 'image/jpeg',
      size: 2412341,
    },
  ]);

  const uploadItem = useCallback((_: FileObject): Promise<{ url: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if (Math.random() > 0.5) {
            resolve({
              url: 'https://picsum.photos/1000/600',
            });
          } else {
            reject(new Error('Example error. Try again'));
          }
        },
        500 + Math.random() * 3000,
      );
    });
  }, []);

  return (
    <Stack gap={3}>
      <FileInput
        label="File states"
        labelIcon={<ImageIcon />}
        description="Use FileObject for upload functionality"
        placeholder="Upload"
        multiple
        useObjects
        uploadItem={uploadItem}
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

Upload.args = {};
