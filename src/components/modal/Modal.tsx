'use client'
import { useStoreModal } from '@/store'
import s from './styles.module.css'
import { useEffect, useRef } from 'react'
import { Icon } from '../ui'

export const Modal = () => {
  const { isOpen, children, setClose } = useStoreModal()
  const wrapperClassNames = `${s.wrapper} ${isOpen ? s.show : ''}`
  const containerClassNames = `${s.container} ${isOpen ? s.smooth : ''}`
  const wrapper = useRef(null)

  useEffect(() => {
    const onClickDocument = (e: MouseEvent) => {
      if (wrapper.current && e.target === wrapper.current) {
        setClose()
      }
    }

    const onEscapeKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setClose()
      }
    }

    document.addEventListener('mousedown', onClickDocument)
    document.addEventListener('keydown', onEscapeKeyDown)

    return () => {
      document.removeEventListener('mousedown', onClickDocument)
      document.removeEventListener('keydown', onEscapeKeyDown)
    }
  }, [])

  return (
    <div className={wrapperClassNames} ref={wrapper}>
      <div className={containerClassNames}>
        <button className={s.closeButton} onClick={() => setClose()}>
          <Icon id='close' />
        </button>
        {children}
      </div>
    </div>
  )
}
