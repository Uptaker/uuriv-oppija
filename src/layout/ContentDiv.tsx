import classNames from 'classnames'
import React from 'react'
import s from './ContentDiv.module.scss'

type Props = {
  children: React.ReactNode
  center?: boolean,
  row?: boolean,
  wide?: boolean
  color?: 'yellow' | 'peach' | 'blue' | 'green',
}

const ContentDiv = ({ center, children, row, wide, color }: Props) => (
  <div className={classNames({
    [s.container]: true,
    [s.center]: center,
    [s.row]: row,
    [s.wide]: wide,
    [s[color!]]: color,
  })}
  >
    {children}
  </div>
)

export default ContentDiv