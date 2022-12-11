import React, {useState} from 'react'
import {strategies} from '../store/Strategies'
import ResponsiveIframeVideo from './ResponsiveIframeVideo'
import classNames from 'classnames'
import s from './VideoCarousel.module.scss'


function VideoCarousel() {

  const videos = strategies.map(s => s.videoUrl) as string[]
  const [queue, setQueue] = useState(videos)

  function next() {
    queue.unshift(queue.pop() as string)
    setQueue([...queue])
  }

  function back() {
    queue.push(queue.shift() as string)
    setQueue([...queue])
  }


  return (
    <div className={classNames(s.container)}>
      <i className={classNames('fa-solid fa-chevron-left', s.pointer)} onClick={() => back()}></i>
      <div className={classNames(s.videos)}>
        <ResponsiveIframeVideo key={queue[videos.length - 1]} url={queue[videos.length - 1]}/>
        <ResponsiveIframeVideo key={queue[0]} url={queue[0]}/>
        <ResponsiveIframeVideo key={queue[1]} url={queue[1]}/>
      </div>
      <i className={classNames('fa-solid fa-chevron-right', s.pointer)} onClick={() => next()}></i>
    </div>
  )
}

export default VideoCarousel