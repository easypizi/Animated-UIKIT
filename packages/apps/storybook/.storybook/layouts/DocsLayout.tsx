import React, { isValidElement, cloneElement, ReactNode } from 'react'
import {
  DocsContainer as BaseContainer,
  DocsContainerProps as BaseContainerProps,
} from '@storybook/blocks'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from 'styled-components'
import {baseTheme, darkTheme} from '@easypizi/ui'

interface ExtraProps {
  deprecated: boolean
  deprecatedReason: string
  migrationLink: string
  hideArgsTable?: boolean
  experimental?: boolean
  showStoriesInDocs?: boolean;
}

type DocsContainerProps = BaseContainerProps & {
  context: { attachedCSFFile: { meta: { parameters?: ExtraProps } } }
} & { children: ReactNode }

const DocsContainer = ({ children, context }: DocsContainerProps) => {
  const isDarkTheme = useDarkMode()

  return (
    <ThemeProvider theme={isDarkTheme ? baseTheme : darkTheme}>
      <BaseContainer 
        theme={isDarkTheme ? themes.dark : themes.light} 
        context={context}>
        {isValidElement<ExtraProps>(children)
          ? cloneElement(children, {
              deprecated: context.attachedCSFFile.meta.parameters?.deprecated,
              deprecatedReason:
                context.attachedCSFFile.meta.parameters?.deprecatedReason,
              migrationLink:
                context.attachedCSFFile.meta.parameters?.migrationLink,
              hideArgsTable:
                context.attachedCSFFile.meta.parameters?.hideArgsTable,
              experimental:
                context.attachedCSFFile.meta.parameters?.experimental,
              showStoriesInDocs:
                context.attachedCSFFile.meta.parameters?.showStoriesInDocs,
            })
          : children}
      </BaseContainer>
    </ThemeProvider>
  )
}

export default DocsContainer
