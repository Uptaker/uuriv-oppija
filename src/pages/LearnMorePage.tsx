import React from 'react'
import {_} from '@codeborne/i18n-json'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'

function LearnMorePage() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: "1299px", margin: "3rem auto"}}>
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
    </div>
  )
}

export default LearnMorePage