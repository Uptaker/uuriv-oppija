import React from 'react'
import {_} from '@codeborne/i18n-json'
import ContentDiv from '../layout/ContentDiv'
import Container from '../components/Container'
import elu from '../assets/ELU-Stamp.svg'
import eluEN from '../assets/ELU-Stamp-EN.svg'

import s from './EluPage.module.scss'
import {participants} from '../store/Participants'
import classNames from 'classnames'

function EluPage() {
  const lang = document.cookie.split('; ')?.find(s => s?.startsWith('LANG='))?.split('=')?.[1]

  return (
    <ContentDiv>
      <div className={s.grid}>
        <div className={s.title}>
          <h1>{_('elu.eluTitle')}</h1>
          <div>{_('elu.eluDescription')}</div>
          <a className={s.source} href="https://elu.tlu.ee" target="_blank">{_('elu.eluSource')} <i className={classNames("fa-solid fa-arrow-up-right-from-square")}></i></a>
        </div>
        <img src={lang === 'en' ? eluEN : elu} className={s.img} alt={_('general.logo')}/>
      </div>

        <div className={s.container}>
            <h1>{_('elu.projectTitle')}</h1>
            <div>{_('elu.projectDescription1')}</div>
            <div>{_('elu.projectDescription2')}</div>
        </div>

      <Container color="peach" label={_('elu.teamTitle')}>
        <ul className={s.list}>
        {participants.map(person => (
          <li key={person.name} className={s.listItem}>
            <b>{person.name}</b> - {person.role[lang as 'et' | 'en']}
          </li>
        ))}
        </ul>
      </Container>
    </ContentDiv>
  )
}

export default EluPage