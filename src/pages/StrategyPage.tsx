import React from 'react'
import {useParams} from 'react-router-dom'
import {strategies} from '../store/Strategies'
import {_} from '@codeborne/i18n-json'
import StrategyInfoCard from '../components/StrategyInfoCard'
import icon from '../assets/idea.svg'
import VideoDiv from '../layout/VideoDiv'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'

function StrategyPage() {

  const { id } = useParams()
  const strategy = strategies.find(s => s.id === id)

  // TODO remove rickroll fallback when videos are on youtube ;)
  return !strategy ? (<>TODO generic not found page</>) : (
    <>
      <div style={{maxWidth: "1299px", margin: "0 auto"}}>
        <h1 style={{margin: "4rem 0"}}>{_(strategy.title)}</h1>
        <StrategyInfoCard color={strategy.color} label={_('general.what')} content={_(strategy.content.what)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.why')} content={_(strategy.content.why)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.how')} content={_(strategy.content.how)}/>
      </div>

      <VideoDiv className={strategy.color}>
        <iframe width="812" height="424" src={strategy.videoUrl ? strategy.videoUrl : "https://www.youtube.com/embed/dQw4w9WgXcQ"} title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen/>
      </VideoDiv>

      <div style={{display: "flex", margin: "5rem 0", padding: "1rem 5rem", justifyContent: "center", flexDirection: "column", alignItems: "center",
        border: `solid ${strategy.color}`, borderWidth: '1px 0'}}>
        <img src={icon} alt="idea" width="90"/>
        <p className="text-md bold" style={{margin: "0.5rem 0"}}>{_('strategy.studies')}</p>
        <p className="text-md" style={{margin: "0.5rem 0", textAlign: "center"}}>{_(strategy.studies.description)}</p>
        <div style={{margin: "0.5rem 5rem", textAlign: "center"}}><span className="bold">{_('strategy.source')}:</span> {strategy.studies.source}</div>
      </div>

      <div style={{display: 'flex', gap: '4rem', maxWidth: "1299px", margin: "3rem auto"}}>
        <Container color={strategy.color} label={_('strategy.usefulApps')}>
          {strategy.apps.map(app => {
            return (
              <Collapsible label={app.name} key={app.name}>
                <p className="text-md"><a href={app.url} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a> {_(app.description)}</p>
              </Collapsible>
              )
          })}
        </Container>

        <Container color={strategy.color} label={_('strategy.eluTeamStudies')}>
          TODO
        </Container>
      </div>
    </>
  )
}

export default StrategyPage;