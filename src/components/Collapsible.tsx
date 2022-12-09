import classNames from 'classnames'
import React, {useState} from 'react'
import s from './Collapsible.module.scss'

export interface CollapsibleProps {
  children: React.ReactNode
  label: string,
  show?: boolean
}

function Collapsible({ children, label, show = false }: CollapsibleProps) {

  const [collapsed, setCollapsed] = useState(show)

  return (
    <div className={s.container}>
      <div onClick={() => setCollapsed(!collapsed)} className={s.item}>
        <i className={classNames(`fa-solid fa-${collapsed ? 'minus' : 'plus'}`, s.icon)}></i>
        <span className={s.label}>{label}</span>
      </div>
      <div className={classNames({
        [s.collapsedDiv]: true,
        [s.collapsed]: !collapsed
      })}>{children}</div>
    </div>
  )
}

export default Collapsible