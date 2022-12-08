import React from 'react'
import {_} from '@codeborne/i18n-json'
import ContentDiv from '../layout/ContentDiv'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'

function LearnMorePage() {

  return (
    <ContentDiv>
      <Container color="peach" label={_('learnMore.readingTitle')}>
        <Collapsible label={"TODO (or any custom non-collapsible content here)"}>
          <div>TODO </div>
        </Collapsible>
        <Collapsible label={"TODO"}>
          <div>TODO</div>
        </Collapsible>
      </Container>

        <Container color="peach" label={_('learnMore.viewingTitle')}>
          <Collapsible label={"TODO"}>
            <div>TODO</div>
          </Collapsible>
          <Collapsible label={"TODO"}>
            <div>TODO</div>
          </Collapsible>
        </Container>
    </ContentDiv>
  )
}

export default LearnMorePage