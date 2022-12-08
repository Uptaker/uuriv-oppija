import React from 'react'
import {_} from '@codeborne/i18n-json'
import ContentDiv from '../layout/ContentDiv'
import Container from '../components/Container'
import Collapsible from '../components/Collapsible'
import elu from '../assets/ELU-Stamp.svg'
import eluEN from '../assets/ELU-Stamp-EN.svg'

import s from './EluPage.module.scss'

function EluPage() {
  const lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]

  return (
    <ContentDiv>
      <div className={s.container}>
        <div className={s.title}>
          <h1>{_('elu.title')}</h1>
          <div>{_('elu.description')}</div>
        </div>
        <img src={lang === 'en' ? eluEN : elu} className={s.img} alt={_('general.logo')}/>
      </div>

      <Container color="peach" label={_('elu.teamTitle')}>
        <Collapsible label={"TODO"}>
          <div>TODO</div>
        </Collapsible>
        <Collapsible label={"TODO"}>
          <div>TODO</div>
        </Collapsible>
      </Container>
    </ContentDiv>
  )
}

export default EluPage