'use client'

import React from 'react'
import clsx from 'clsx'
import s from './styles.module.css'
import { Pause, PlayIcon } from 'lucide-react'
import Image from 'next/image'

interface Props {
  className?: string
  src: string
}

export const VideoPlayer: React.FC<Props> = ({ className, src }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isStart, setIsStart] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const onClick = () => {
    console.log(isStart)
    if (!videoRef.current) return

    if (videoRef.current.currentTime === 0 && !isStart) {
      setIsStart(true)
      videoRef.current.play()
    } else {
      if (!videoRef.current.paused) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  return (
    <div className={clsx(s.wrapper, className)}>
      <button className={clsx(s.button, isPlaying ? s.hide : s.show)} onClick={onClick}>
        {!isPlaying ? (
          <PlayIcon className={s.playIcon} width={50} height={40} fill='#fff' stroke='transparent' />
        ) : (
          <Pause className={s.pauseIcon} width={50} height={40} fill='#fff' stroke='transparent' />
        )}
      </button>
      <video
        className={s.player}
        ref={videoRef}
        controls
        preload='none'
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type='video/mp4' />
      </video>
      {!isStart && <Image className={s.poster} src='/images/poster.jpg' alt='Видео постер' fill />}
    </div>
  )
}
