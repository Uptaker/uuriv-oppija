import React from 'react'
import s from './Modal.module.scss'
import classNames from 'classnames'

export interface ModalProps {
  open: boolean,
  children?: React.ReactNode,
  closeHandler: Function
}

function Modal({open, children, closeHandler}: ModalProps) {

  function close(e: any) {
    e.preventDefault()
    if (e.target === e.currentTarget) closeHandler(false)

  }

  if (!open) return null
  else return (
    <div className={classNames(s.overlay)} onClick={(e) => close(e)}>
      <div className={classNames(s.controls)} onClick={() => closeHandler(false)}>
        <i className={classNames(s.close, 'fa-regular fa-circle-xmark')}/>
      </div>
      <div className={classNames(s.modal)}>
        {children}
      </div>
    </div>
  )
}

export default Modal