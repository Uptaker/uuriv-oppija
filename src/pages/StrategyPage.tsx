import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {strategies} from '../store/Strategies'
import {_} from '@codeborne/i18n-json'
import StrategyInfoCard from '../components/StrategyInfoCard'
import icon from '../assets/idea.svg'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'
import ContentDiv from '../layout/ContentDiv'
import Divider from '../layout/Divider'
import classNames from 'classnames'
import s from './StrategyPage.module.scss'
import Modal from '../components/Modal'
import Posters from '../components/Posters'

function StrategyPage() {
  const { id } = useParams()
  const strategy = strategies.find(s => s.id === id)

  const [modalContent , setModalContent] = useState<string|null>(null)

  return !strategy ? (<>TODO generic not found page</>) : (
    <>
      <ContentDiv>
        <h1>{_(strategy.title)}</h1>
        <StrategyInfoCard color={strategy.color} label={_('general.what')} content={_(strategy.content.what)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.why')} content={_(strategy.content.why)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.how')} content={_(strategy.content.how)}/>
        <Collapsible type="accordion" color={strategy.color} label={_('strategy.teacher')} key={strategy.title}>
          {strategy.teacher.map(paragraph => (
            <React.Fragment key={paragraph.paragraph}>
              { paragraph.title && <h2 className={s.accordionTitle}>{_(paragraph.title)}</h2>}
              <p dangerouslySetInnerHTML={{__html: _(paragraph.paragraph)}} className={s.accordionParagraph}/>
            </React.Fragment>
          ))}
          <Link to='/learn-more' className={s.accordionSource}>{_('general.source')}</Link>
        </Collapsible>
      </ContentDiv>

      <ContentDiv wide center color={strategy.color}>
        <div className={s.videoPlayer}>
          <iframe src={strategy.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </ContentDiv>

      <Divider colour={strategy.color} />

      <ContentDiv center>
        <img src={icon} alt="idea" className={s.icon} />
        <p className={s.title}>{_('strategy.studies')}</p>
        <p className={s.center}>{_(strategy.studies.description)}</p>
        <p className={classNames(s.center, s.source)}><span className="bold">{_('strategy.source')}:</span> {strategy.studies.source}</p>
      </ContentDiv>

      <Divider colour={strategy.color} />

      <ContentDiv row>
        <Container color={strategy.color} label={_('strategy.usefulApps')}>
          {strategy.apps.map(app => {
            app = `apps.${app}.`
            return (
              <Collapsible type="collapsible" label={_(`${app}name`)} key={app}>
                <p>{_(`${app}description`)}</p>
                <a href={_(`${app}url`)} target="_blank" className={s.tiny}>
                  {_('strategy.website') + '  '}
                  <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i>
                </a>
              </Collapsible>
              )
          })}
        </Container>

        <Posters strategy={strategy}/>
      </ContentDiv>

      <Modal open={!!modalContent} closeHandler={setModalContent}>
        <img src={modalContent!} className={classNames(s.fullWidth)}/>
      </Modal>
    </>
  )
}

export default StrategyPage;