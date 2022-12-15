import React, {useState} from 'react'
import {_} from '@codeborne/i18n-json'
import Container from '../components/Container'
import classNames from 'classnames'
import s from './Posters.module.scss'
import Modal from '../components/Modal'
import {Strategy} from '../types'

function Posters({strategy}: { strategy: Strategy }) {

  const [modalContent , setModalContent] = useState<string|null>(null)
  function showPoster(poster: string) {
    setModalContent(poster)
  }

  return (
    <>
      <Container color={strategy.color} label={_('strategy.eluTeamStudies')}>
        <div className={classNames(s.grid)}>
          {strategy.studies.list?.map(poster => {
            return <img className={classNames(s.poster)} src={poster} onClick={() => showPoster(poster)}/>
          })}
        </div>
      </Container>

      <Modal open={!!modalContent} closeHandler={setModalContent}>
        <img src={modalContent!} className={classNames(s.fullWidth)}/>
      </Modal>
    </>
  )
}

export default Posters;