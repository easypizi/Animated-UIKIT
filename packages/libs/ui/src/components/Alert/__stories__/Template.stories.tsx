import type { StoryFn } from '@storybook/react';
import { Alert } from '..';

export const Template: StoryFn<typeof Alert> = (props) => <Alert {...props} />;
