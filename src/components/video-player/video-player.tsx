'use client'

import React from 'react'
import clsx from 'clsx'
import s from './styles.module.css'
import { PlayIcon } from 'lucide-react'
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
    if (!videoRef.current || isStart) return

    setIsStart(true)
    videoRef.current.play()
  }

  return (
    <div className={clsx(s.wrapper, className)}>
      <button className={clsx(s.button, isPlaying ? s.hide : s.show)}>
        <PlayIcon width={50} height={50} fill='#fff' stroke='transparent' />
      </button>
      <video
        className={s.player}
        ref={videoRef}
        controls
        preload='none'
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={onClick}
      >
        <source src={src} type='video/mp4' />
      </video>
      {!isStart && <Image className={s.poster} src='/images/poster.jpg' alt='Видео постер' fill />}
    </div>
  )
}
