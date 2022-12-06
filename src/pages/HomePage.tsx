import React from 'react'
import banner from '../assets/home-banner.svg'
import {_} from '@codeborne/i18n-json'

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
    </>
  )
}

export default HomePage