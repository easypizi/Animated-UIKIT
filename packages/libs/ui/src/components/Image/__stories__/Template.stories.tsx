import type { StoryFn } from '@storybook/react';
import { Image } from '..';
import { Typography } from '../../Typography';
import { Stack } from '../../Stack';

export const Template: StoryFn<typeof Image> = (args) => (
  <Stack gap={10} style={{ width: '500px', height: '1000px' }}>
    <Stack gap={4}>
      <Typography variant="headerMD">With Skeleton</Typography>
      <div style={{ height: '300px', width: '100%' }}>
        <Image type="skeleton" {...args} />
      </div>
    </Stack>
    <Stack gap={4} style={{ flexShrink: 0 }}>
      <Typography variant="headerMD">Blurred effect</Typography>
      <Image type="blur" {...args} />
    </Stack>
  </Stack>
);

Template.args = {
  rounded: true,
  src: 'https://placebear.com/500/300',
  alt: 'bear.jpg',
};
