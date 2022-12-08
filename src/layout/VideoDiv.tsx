import classNames from 'classnames'
import React, { useState } from 'react'
import s from './VideoDiv.module.scss'

type Props = {
  className: string,
  children: React.ReactNode
}

const VideoDiv = ({ className, children }: Props) => (
  <div className={classNames(s.container, className)}>{children}</div>
)

export default VideoDiv