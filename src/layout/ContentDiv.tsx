import classNames from 'classnames'
import React from 'react'
import s from './ContentDiv.module.scss'
import {Color} from '../types'

type Props = {
  children: React.ReactNode
  center?: boolean,
  carousel?: boolean,
  row?: boolean,
  wide?: boolean,
  color?: Color,
}

const ContentDiv = ({ carousel, center, children, row, wide, color }: Props) => (
  <div className={classNames({
    [s.container]: true,
    [s.center]: center,
    [s.row]: row,
    [s.wide]: wide,
    [s.carousel]: carousel,
    [s[color!]]: color,
  })}
  >
    {children}
  </div>
)

export default ContentDiv