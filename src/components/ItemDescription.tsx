import React from 'react'
import s from './ItemDescription.module.scss'

interface ItemDescriptionProps {
  title: string,
  text: string,
  icon: string
}

function ItemDescription({title, text, icon}: ItemDescriptionProps) {
  return (
    <div className={s.container}>
      {icon && <img src={icon} alt="idea" className={s.icon} />}
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  )
}

export default ItemDescription