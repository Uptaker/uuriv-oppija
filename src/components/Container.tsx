import classNames from 'classnames'
import React from 'react'
import s from './Container.module.scss'

export interface ContainerProps  {
  children: React.ReactNode
  color: 'yellow' | 'peach' | 'blue' | 'green',
  label?: string
}

function Container({children, color, label}: ContainerProps) {
  return (
    <div className={classNames(s.container, s[color])}>
      {label && <div className={classNames(s.label, s[color])}>{label}</div>}
      <div className={s.content}>
        {children}
      </div>
    </div>
  )
}

export default Container