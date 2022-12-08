import classNames from 'classnames'
import React, { useState } from 'react'
import s from './ContentDiv.module.scss'

type Props = {
  center?: boolean,
  row?: boolean,
  children: React.ReactNode
}

const ContentDiv = ({ center, children, row }: Props) => (
  <div className={classNames({
    [s.container]: true,
    [s.center]: center,
    [s.row]:row,
  })}
  >
    {children}
  </div>
)

export default ContentDiv