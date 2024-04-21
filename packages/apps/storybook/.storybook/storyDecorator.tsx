import React from 'react';
import { Preview } from '@storybook/react'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, baseTheme, darkTheme }  from '@easypizi/ui';

type Decorator = Exclude<Preview['decorators'], undefined>[number];

export const storyDecorator: Decorator = (StoryComponent) => {
  const isDark = useDarkMode();

  return (
    <ThemeProvider theme={isDark ? darkTheme : baseTheme}>
      <GlobalStyles />
      <StoryComponent />
    </ThemeProvider>
  )
}