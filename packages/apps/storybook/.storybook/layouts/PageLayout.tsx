import React, {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/blocks'
import { FC, useEffect, useMemo } from 'react'
import styled from 'styled-components'

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledTitle = styled.div`
  &[data-state='deprecated'] h1 {
    text-decoration: line-through;
  }
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

type PageProps = {
  deprecated?: boolean
  deprecatedReason?: string
  hideArgsTable?: boolean
  showStoriesInDocs?: boolean;
  experimental?: boolean
}

export const Pagelayout: FC = ({
  deprecated,
  deprecatedReason,
  hideArgsTable,
  showStoriesInDocs = true,
  experimental,
  ...rest
}: PageProps) => {
  const state = useMemo(() => {
    if (deprecated) {
      return 'deprecated'
    }
    if (experimental) {
      return 'experimental'
    }
    return 'stable'
  }, [])

  useEffect(() => {
    const collapseSpans = [
      ...document.querySelectorAll('.rejt-tree > .rejt-object-node > span'),
      ...document.querySelectorAll('.rejt-tree > .rejt-array-node > span'),
    ] as HTMLSpanElement[];
  
    for (const span of collapseSpans) {
      if (span.className !== 'closed') {
        span.click();
      }
      span.className = 'closed';
    }
  }, [])

  return (
    <>
      <StyledHeaderContainer>
        <StyledTitle data-state={state}>
          <Title />
        </StyledTitle>
        {deprecated ? (
          <div>
            Deprecated
          </div>
        ) : null}
        {experimental ? (
          <div>
            Experimental
          </div>
        ) : null}
      </StyledHeaderContainer>
      {deprecated ? (
        <FlexDiv>
          <div>
            {deprecatedReason
              ? deprecatedReason
              : 'This component is deprecated please do not use it any more.'}
          </div>
        </FlexDiv>
      ) : (
        <Subtitle />
      )}
      {experimental ? (
        <div>
          This component is at an unstable stage and is subject to change in
          future releases.&nbsp;
        </div>
      ) : null}
      <Description />
      <Primary />
      {!hideArgsTable ? <ArgsTable story={PRIMARY_STORY} /> : null}
      {showStoriesInDocs && <Stories />}
    </>
  )
}
