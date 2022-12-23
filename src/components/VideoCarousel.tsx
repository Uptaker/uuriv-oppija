import React, {useEffect, useState} from 'react'
import {strategies} from '../store/Strategies'
import ResponsiveIframeVideo from './ResponsiveIframeVideo'
import classNames from 'classnames'
import s from './VideoCarousel.module.scss'

function VideoCarousel() {
  const videos = strategies.map(s => s.videoUrl) as string[]
  const [queue, setQueue] = useState(videos)
  const [isDesktop, setIsDektop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Using media queries within React: https://stackoverflow.com/a/66590903
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDektop(e.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 768px)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsTablet(e.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [])

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
        {isTablet && <ResponsiveIframeVideo key={queue[0]} url={queue[0]}/>}
        {isDesktop && <ResponsiveIframeVideo key={queue[1]} url={queue[1]}/>}
      </div>
      <i className={classNames('fa-solid fa-chevron-right', s.pointer)} onClick={() => next()}></i>
    </div>
  )
}

export default VideoCarousel