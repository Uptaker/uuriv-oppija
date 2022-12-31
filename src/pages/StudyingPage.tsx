import classNames from 'classnames'
import React from 'react'
import {Link} from 'react-router-dom'
import {_} from '@codeborne/i18n-json'
import ContentDiv from '../layout/ContentDiv'
import Container from '../components/Container'
import brain from '../assets/study/brain.png'
import brain2 from '../assets/study/brain2.png'
import brain3 from '../assets/study/brain3.png'

import s from './StudyingPage.module.scss'

const StudyingPage = () => (
  <ContentDiv>
    <h1>{_('study.title')}</h1>
    <p className={s.intro}>{_('study.p1')}</p>

      <Container color="green" label={_('study.introTitle')}>
        <ul className={s.list}>
          {Object.values(_('study.introBullets')).map(bullet => (
            <li key={bullet} className={s.listItem}>
              {bullet}
            </li>
          ))}
        </ul>
        <p>{_('study.p2')}</p>
      </Container>
      <div className={s.intro}>{_('study.p3')}</div>

      <Container label={_('study.brain.title')} color="green">
        <div className={s.content}>
          <div dangerouslySetInnerHTML={{__html: _('study.brain.text')}} />
          <img src={brain} />
        </div>
        <div className={s.tiny}>{_('general.sourceText')}: <a href="https://vara.e-koolikott.ee/h5p/embed/3904" target="_blank">{_('study.brain.source')} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i></a></div>
        <div>
          <p dangerouslySetInnerHTML={{__html: _('study.brain.brain2')}} />
          <img src={brain2} className={s.image} />
        </div>

        <div>
          <h4 dangerouslySetInnerHTML={{__html: _('study.brain.keyfactors.title')}} className={s.title} />
          <ul className={s.list}>
            {Object.values(_('study.brain.keyfactors.factors')).map(bullet => (
              <li key={bullet} className={s.listItem}>
                {bullet}
              </li>
            ))}
          </ul>
          <img src={brain3} className={s.image} />
          <p className={s.tiny}>{_('general.sourceText')}: {_('study.brain.keyfactors.source')}</p>
        </div>
      </Container>
      <Container label={_('study.memory.title')} color="green">

      </Container>
      <Container label={_('study.conclusion.title')} color="green">
        <p dangerouslySetInnerHTML={{__html: _('study.conclusion.p1')}} />
        <p dangerouslySetInnerHTML={{__html: _('study.conclusion.p2')}} /> 
        <p>{_('study.conclusion.listen')}: <a href="https://novaator.err.ee/260018/uhe-minuti-loeng-kuidas-uskumus-meie-voimeid-mojutab" target="_blank">
          {_('learnMore.lecture.title')} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i>
        </a></p> 
        <p dangerouslySetInnerHTML={{__html: _('study.conclusion.end')}} /> 
      </Container>
      <div>{_('study.further')} <a href="https://edidaktikum.ee/et/content/%C3%B5ppimine-ja-ps%C3%BChholoogia" target="_blank">
          {_('study.link')} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i>
        </a>
      </div>
      <div className={classNames(s.intro, s.tiny)}>
        <Link to='/learn-more'>{_('general.source')}</Link>
      </div>
  </ContentDiv>
)

export default StudyingPage