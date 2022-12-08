import classNames from 'classnames'
import React, { useState } from 'react'
import s from './ContentDiv.module.scss'

type Props = {
  children: React.ReactNode
}

const ContentDiv = ({ children }: Props) => (
  <div className={s.container}>{children}</div>
)

export default ContentDiv