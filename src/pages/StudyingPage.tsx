import classNames from 'classnames'
import React from 'react'
import {Link} from 'react-router-dom'
import {_} from '@codeborne/i18n-json'
import ContentDiv from '../layout/ContentDiv'
import Container from '../components/Container'
import brain from '../assets/study/brain.png'
import brainEN from '../assets/study/brain.jpg'
import brain2 from '../assets/study/brain2.png'
import brain3 from '../assets/study/brain3.png'
import forgetting from '../assets/study/forgetting.png'
import synapse from '../assets/study/synapse.jpg'

import s from './StudyingPage.module.scss'
import Divider from '../layout/Divider'

const StudyingPage = () => {
  const lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]
  
  return (
    <ContentDiv>
      <h1>{_('study.title')}</h1>
      <p className={s.intro}>{_('study.p1')}</p>
      <div className={s.intro}>{_('study.p3')}</div>

      <Container label={_('study.brain.title')} color="green">
        <div className={s.content}>
          <div dangerouslySetInnerHTML={{__html: _('study.brain.text')}} />
          <img src={lang === 'et' ? brain : brainEN} />
        </div>
        <div>
          <div className={s.tiny}>{_('general.sourceText')}: <a href="https://vara.e-koolikott.ee/h5p/embed/3904" target="_blank">{_('study.brain.source')} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i></a></div>
          <div className={s.tiny}>{_('general.imageSource')}: <a href="https://commons.wikimedia.org/wiki/File:Blausen_0672_NeuralTissue.png" target="_blank">{_('study.brain.imageSource')} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i></a></div>
        </div>
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
        <div>{_('study.memory.camera')}</div>
        <div className={classNames(s.row, s.memory)}>
          <div>{_('study.memory.sensory')}</div>
          <div><i className="fa-solid fa-right-long"></i></div>
          <div>{_('study.memory.working')}</div>
          <div><i className="fa-solid fa-right-left"></i></div>
          <div>{_('study.memory.longterm')}</div>
        </div>
        <div className={s.coding}>
          <div>
            <div>{_('study.memory.1')} <i className="fa-solid fa-right-long"></i></div>
            <div>{_('study.memory.2')} <i className="fa-solid fa-right-long"></i></div>
          </div>
          <div>
            <div className={s.right}>{_('study.memory.3')} <i className="fa-solid fa-turn-down"></i></div>
            <div><i className="fa-solid fa-left-long"></i> {_('study.memory.4')} <i className="fa-solid fa-left-long"></i></div>
          </div>
        </div>
        <div className={s.green}>
          <div>{_('study.memory.quote')}</div>
          <div className={s.tiny}>- {_('study.memory.source')}</div>
        </div>
        <Divider colour='green'/>
        <div className={classNames(s.grid, s.table)}>
          <div className={s.tableRow}>
            <div className={s.strong}>{_('study.memory.coding')}</div>
            <div className={s.strong}>{_('study.memory.retrieval')}</div>
          </div>
          <div className={s.tableRow}>
            <div>{_('study.memory.deposit')}</div>
            <div>{_('study.memory.withdraw')}</div>
          </div>
        </div>
        <div className={s.center}>{_('study.memory.practice')}</div>
        <Divider colour='green'/>
        <div className={s.forgettingContent}>
          <img src={forgetting} className={s.image} />
          <div className={s.tiny}>{_('study.memory.source2')}</div>
        </div>
        <div dangerouslySetInnerHTML={{__html: _('study.memory.brains')}}/>
        <div dangerouslySetInnerHTML={{__html: _('study.memory.reactivate')}}/>
        <div className={classNames(s.forgettingContent, s.reactivate)}>
          <div className={classNames(s.row, s.memory, s.formation)}>
            <div>{_('study.memory.synapse')}</div>
            <div><i className="fa-solid fa-right-long"></i></div>
            <div>{_('study.memory.strengthen')}</div>
            <div><i className="fa-solid fa-right-long"></i></div>
            <div>{_('study.memory.formation')}</div>
          </div>
          <img src={synapse} className={s.synapse} />
        </div>
      </Container>
      <Container label={_('study.conclusion.title')} color="green">
        <p dangerouslySetInnerHTML={{__html: _('study.conclusion.p1')}} />
        <p dangerouslySetInnerHTML={{__html: _('study.conclusion.p2')}} /> 
        <p>{_('study.conclusion.listen')}: <a href="https://novaator.err.ee/260018/uhe-minuti-loeng-kuidas-uskumus-meie-voimeid-mojutab" target="_blank">
          {_('learnMore.lecture.title')} <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i>
        </a> {lang === 'en' && '(' + _('learnMore.lecture.lang') + ')'}</p> 
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
}

export default StudyingPage