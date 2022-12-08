import classNames from 'classnames'
import React from 'react'
import s from './StrategyInfoCard.module.scss'

interface StrategyInfoCardProps {
  label: string,
  content: string,
  color: 'yellow' | 'peach' | 'blue' | 'green',
}

function StrategyInfoCard({label, content, color}: StrategyInfoCardProps) {

  return (
    <div className={s.wrapper}>
      <div className={classNames(s.title, s[color])}>
        {label}
      </div>
      <div className={classNames(s.container, s[color])}>
        <p className={s.content}>{content}</p>
      </div>
    </div>
  )
}

export default StrategyInfoCard;