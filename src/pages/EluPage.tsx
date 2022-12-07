import React from 'react'
import './StrategyPage.css'
import {_} from '@codeborne/i18n-json'
import Container from '../components/Container'
import Collapsable from '../components/Collapsable'
import elu from '../assets/ELU-Stamp.svg'

function EluPage() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: "1299px", margin: "3rem auto"}}>
      <div style={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: "5rem", justifyItems: "center", alignItems: "center"}}>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", gap: "1rem"}}>
          <h1 className="text-xl">{_('elu.title')}</h1>
          <div className="text-lg">{_('elu.description')}</div>
        </div>
        <img src={elu} width="350" alt="banner"/>
      </div>

      <Container color="#FFC09F" label={_('elu.teamTitle')}>
        <Collapsable label={"TODO"}>
          <div>TODO</div>
        </Collapsable>
        <Collapsable label={"TODO"}>
          <div>TODO</div>
        </Collapsable>
      </Container>
    </div>
  )
}

export default EluPage