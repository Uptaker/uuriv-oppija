import React from 'react'
import s from './Modal.module.scss'
import classNames from 'classnames'

export interface ModalProps {
  open: boolean,
  children?: React.ReactNode,
  closeHandler: Function
}

function Modal({open, children, closeHandler}: ModalProps) {

  if (!open) return null
  else return (
    <div className={classNames(s.overlay)}>
      <div className={classNames(s.controls)}>
        <i onClick={() => closeHandler(false)} className={classNames(s.close, 'fa-regular fa-circle-xmark')}/>
      </div>
      <div className={classNames(s.modal)}>
        {children}
      </div>
    </div>
  )
}

export default Modal