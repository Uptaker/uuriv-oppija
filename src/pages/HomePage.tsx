import React from 'react'
import banner from '../assets/home-banner.svg'
import {_} from '@codeborne/i18n-json'
import attitude from '../assets/attitude.svg'
import improvement from '../assets/improvement.svg'
import stress from '../assets/stress.svg'
import confidence from '../assets/confidence.svg'
import timeSavings from '../assets/timeSavings.svg'
import ItemDescription from '../components/ItemDescription'

function HomePage() {
  return (
    <>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", justifyItems: "center"}}>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", gap: "1rem"}}>
          <h1 className="text-xl">{_('title')}</h1>
          <div className="text-lg">{_('home.description')}</div>
          <button className="btn text-md">{_('general.readMore')}</button>
        </div>
        <img src={banner} alt="banner"/>
      </div>

      <div style={{backgroundColor: "#FFEE93", display: "flex", justifyContent: "center", padding: "1rem 1rem", margin: "0 0 5rem 0"}}>
        <h1>{_('home.whyForMe')}</h1>
      </div>

      <div style={{display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", alignContent: "center"}}>
        <ItemDescription title={_('home.attitude')} text={_('home.attitudeText')} icon={attitude}/>
        <ItemDescription title={_('home.improvement')} text={_('home.improvementText')} icon={improvement}/>
        <ItemDescription title={_('home.stress')} text={_('home.stressText')} icon={stress}/>
        <ItemDescription title={_('home.confidence')} text={_('home.confidenceText')} icon={confidence}/>
        <ItemDescription title={_('home.timeSavings')} text={_('home.timeSavingsText')} icon={timeSavings}/>
      </div>
    </>
  )
}

export default HomePage