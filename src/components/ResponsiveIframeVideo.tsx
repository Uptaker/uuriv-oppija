import React from 'react'
import s from './ResponsiveIframeVideo.module.scss'
import classNames from 'classnames'

export interface ResponsiveIframeVideoProps {
  url: string
}

function ResponsiveIframeVideo({url}: ResponsiveIframeVideoProps) {
  return (
    <div className={classNames(s.container)}>
      <iframe src={url} title="previous" className={classNames(s.iframe)}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  )
}

export default ResponsiveIframeVideo