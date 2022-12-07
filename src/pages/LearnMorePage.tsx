import React from 'react'
import './StrategyPage.css'
import {_} from '@codeborne/i18n-json'
import Container from '../components/Container'
import Collapsable from '../components/Collapsable'

function LearnMorePage() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: "1299px", margin: "3rem auto"}}>
      <Container color={"#FFC09F"} label={_('learnMore.readingTitle')}>
        <Collapsable label={"TODO (or any custom non-collapsible content here)"}>
          <div>TODO </div>
        </Collapsable>
        <Collapsable label={"TODO"}>
          <div>TODO</div>
        </Collapsable>
      </Container>

        <Container color="#FFC09F" label={_('learnMore.viewingTitle')}>
          <Collapsable label={"TODO"}>
            <div>TODO</div>
          </Collapsable>
          <Collapsable label={"TODO"}>
            <div>TODO</div>
          </Collapsable>
        </Container>
    </div>
  )
}

export default LearnMorePage