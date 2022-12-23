import React from 'react'
import banner from '../assets/home-banner.svg'
import {_} from '@codeborne/i18n-json'
import attitude from '../assets/attitude.svg'
import improvement from '../assets/improvement.svg'
import stress from '../assets/stress.svg'
import confidence from '../assets/confidence.svg'
import timeSavings from '../assets/timeSavings.svg'
import ItemDescription from '../components/ItemDescription'
import ContentDiv from '../layout/ContentDiv'

import s from './HomePage.module.scss'
import VideoCarousel from '../components/VideoCarousel'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <>
      <div className={s.grid}>
        <div className={s.hero}>
          <h1>{_('title')}</h1>
          <div className={s.description}>{_('home.description')}</div>
          <Link to='/elu' className={s.button}>{_('general.readMore')}</Link>
        </div>
        <img src={banner} alt="banner" className={s.banner}/>
      </div>

      <div className={s.divider}>
        <h1>{_('home.whyForMe')}</h1>
      </div>

      <ContentDiv>
        <div className={s.profile}>
          <ItemDescription title={_('home.attitude')} text={_('home.attitudeText')} icon={attitude}/>
          <ItemDescription title={_('home.improvement')} text={_('home.improvementText')} icon={improvement}/>
          <ItemDescription title={_('home.stress')} text={_('home.stressText')} icon={stress}/>
          <ItemDescription title={_('home.confidence')} text={_('home.confidenceText')} icon={confidence}/>
          <ItemDescription title={_('home.timeSavings')} text={_('home.timeSavingsText')} icon={timeSavings}/>
        </div>
      </ContentDiv>

      <ContentDiv wide carousel color="yellow">
        <VideoCarousel/>
      </ContentDiv>
    </>
  )
}

export default HomePage