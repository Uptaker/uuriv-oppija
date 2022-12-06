import React from 'react'
import {useParams} from 'react-router-dom'
import {strategies} from '../store/Strategies'
import './StrategyPage.css'
import {_} from '@codeborne/i18n-json'
import StrategyInfoCard from '../components/StrategyInfoCard'

function StrategyPage() {

  const { id } = useParams()
  const strategy = strategies.find(s => s.id === id)

  // TODO remove rickroll fallback when videos are on youtube ;)
  return !strategy ? (<>TODO generic not found page</>) : (
    <>
      <div style={{maxWidth: "1299px", margin: "0 auto"}}>
        <h1>{_(strategy.title)}</h1>
        <StrategyInfoCard color={strategy.color} label={_('general.what')} content={_(strategy.content.what)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.why')} content={_(strategy.content.why)}/>
        <StrategyInfoCard color={strategy.color} label={_('general.how')} content={_(strategy.content.how)}/>
      </div>

      <div style={{backgroundColor: strategy.color, display: "flex", justifyContent: "center", padding: "51px 10px"}}>
        <iframe width="560" height="315" src={strategy.videoUrl ? strategy.videoUrl : "https://www.youtube.com/embed/dQw4w9WgXcQ"} title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
      </div>
    </>
  )
}

export default StrategyPage;