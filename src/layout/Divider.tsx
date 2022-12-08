import classNames from 'classnames'
import React, { useState } from 'react'
import s from './Divider.module.scss'

type Props = {
  colour: 'yellow' | 'peach' | 'blue' | 'green'
}

const Divider = ({ colour }: Props) => (
  <div className={classNames(s.divider, s[colour])} />
)

export default Divider