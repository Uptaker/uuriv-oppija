import React from 'react'
import {useParams} from 'react-router-dom'
import {strategies} from '../store/Strategies'
import {_} from '@codeborne/i18n-json'
import StrategyInfoCard from '../components/StrategyInfoCard'
import icon from '../assets/idea.svg'
import VideoDiv from '../layout/VideoDiv'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'
import ContentDiv from '../layout/ContentDiv'
import Divider from '../layout/Divider'
import classNames from 'classnames'
import s from './StrategyPage.module.scss'

function StrategyPage() {

  const { id } = useParams()
  const strategy = strategies.find(s => s.id === id)

  // TODO remove rickroll fallback when videos are on youtube ;)
  return !strategy ? (<>TODO generic not found page</>) : (
    <>
      <ContentDiv>
        <h1>{_(strategy.title)}</h1>
        <StrategyInfoCard color={strategy.color} label={_('general.what')} content={_(strategy.content.what)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.why')} content={_(strategy.content.why)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.how')} content={_(strategy.content.how)}/>
      </ContentDiv>

      <VideoDiv className={strategy.color}>
        <iframe width="812" height="424" src={strategy.videoUrl ? strategy.videoUrl : "https://www.youtube.com/embed/3zp33WkqUw8"} title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen/>
      </VideoDiv>

      <Divider colour={strategy.color} />

      <ContentDiv center>
        <img src={icon} alt="idea" className={s.icon} />
        <p className={s.title}>{_('strategy.studies')}</p>
        <p className={s.center}>{_(strategy.studies.description)}</p>
        <p className={classNames(s.center, s.source)} style={{margin: "1rem 5rem", textAlign: "center"}}><span className="bold">{_('strategy.source')}:</span> {strategy.studies.source}</p>
      </ContentDiv>

      <Divider colour={strategy.color} />

      <ContentDiv row>
        <Container color={strategy.color} label={_('strategy.usefulApps')}>
          {strategy.apps.map(app => {
            app = `apps.${app}.`
            return (
              <Collapsible label={_(`${app}name`)} key={app}>
                <p>{_(`${app}description`)}</p>
                <a href={_(`${app}url`)} target="_blank" className={s.tiny}>
                  {_('strategy.website') + '  '}
                  <i className={classNames("fa-solid fa-arrow-up-right-from-square", s.tiny)}></i>
                </a>
              </Collapsible>
              )
          })}
        </Container>

        <Container color={strategy.color} label={_('strategy.eluTeamStudies')}>
          TODO
        </Container>
      </ContentDiv>
    </>
  )
}

export default StrategyPage;