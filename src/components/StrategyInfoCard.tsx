import classNames from 'classnames';
import React from 'react'
import s from './StrategyInfoCard.module.scss'

interface StrategyInfoCardProps {
  label: string,
  content: string,
  color: 'yellow' | 'peach' | 'blue',
}

function StrategyInfoCard({label, content, color}: StrategyInfoCardProps) {

  return (
      <div className={classNames(s.container, s[color])}>
        <h2 className={classNames(s.title, s[color])}>{label}</h2>
        <p className={s.content}>{content}</p>
      </div>
  )
}

export default StrategyInfoCard;