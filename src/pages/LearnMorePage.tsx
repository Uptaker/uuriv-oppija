import classNames from 'classnames'
import React from 'react'
import {_} from '@codeborne/i18n-json'
import ContentDiv from '../layout/ContentDiv'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'

import s from './LearnMorePage.module.scss'

export interface Page {
  title: string,
  url: string,
  lang: string
}

function LearnMorePage() {

  return (
    <ContentDiv>
      <Container color="peach" label={_('learnMore.readingTitle')}>
        <ul>
          {Object.values(_('learnMore.articles') as unknown as Page[]).map(strategy => (
            <li key={strategy.title} style={{margin: "1.5rem 0"}}>
              <a href={strategy.url} target="_blank">{strategy.title} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i></a>
              <div className={s.tiny}>{strategy.lang}</div>
            </li>
          ))}
        </ul>
      </Container>

        <Container color="peach" label={_('learnMore.viewingTitle')}>
          <Collapsible type="collapsible" label={"TODO"}>
            <div>TODO</div>
          </Collapsible>
          <Collapsible type="collapsible" label={"TODO"}>
            <div>TODO</div>
          </Collapsible>
        </Container>
    </ContentDiv>
  )
}

export default LearnMorePage