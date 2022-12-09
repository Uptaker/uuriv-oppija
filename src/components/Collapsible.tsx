import classNames from 'classnames'
import React, {useState} from 'react'
import { Color } from '../types'
import s from './Collapsible.module.scss'

export interface CollapsibleProps {
  children: React.ReactNode,
  label: string,
  show?: boolean,
  type: 'collapsible' | 'accordion',
  color?: Color
}

function Collapsible({ children, color, label, show = false, type }: CollapsibleProps) {
  const [collapsed, setCollapsed] = useState(show)

  return (
    <div className={classNames({
      [s.container]: true,
      [s.accordion]: type === 'accordion',
    })}>
      <div onClick={() => setCollapsed(!collapsed)} className={classNames({
        [s.item]: true,
        [s.accordion]: type === 'accordion',
        [s[color!]]: color,
      })}>
        {type === 'collapsible' && <i className={classNames(`fa-solid fa-${collapsed ? 'minus' : 'plus'}`, s.icon)}></i>}
        <span className={classNames({
          [s.label]: true,
          [s.accordion]: type === 'accordion',
        })}>
          {label}
        </span>
        {type === 'accordion' && <i className={classNames(`fa-solid fa-${collapsed ? 'arrow-up-long' : 'arrow-down-long'}`, s.icon)}></i>}
      </div>
      <div className={classNames({
        [s.collapsedDiv]: true,
        [s.collapsed]: !collapsed,
        [s.wrapper]: type === 'accordion',
      })}>{children}</div>
    </div>
  )
}

export default Collapsible