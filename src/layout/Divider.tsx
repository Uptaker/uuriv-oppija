import classNames from 'classnames'
import React from 'react'
import s from './Divider.module.scss'
import {Color} from '../types'

type Props = {
  colour: Color
}

const Divider = ({ colour }: Props) => (
  <div className={classNames(s.divider, s[colour])} />
)

export default Divider