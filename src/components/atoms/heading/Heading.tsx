import { FC, ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}

export const Heading: FC<Props> = ({ level, children, className }) => {
  const renderingElement = () => {
    switch (level) {
      case 'h1':
        return <h1 className={className ? className : ''}>{children}</h1>
      case 'h2':
        return <h2 className={className ? className : ''}>{children}</h2>
      case 'h3':
        return <h3 className={className ? className : ''}>{children}</h3>
      case 'h4':
        return <h4 className={className ? className : ''}>{children}</h4>
      case 'h5':
        return <h5 className={className ? className : ''}>{children}</h5>
      case 'h6':
        return <h6 className={className ? className : ''}>{children}</h6>
    }
  }

  return <>{renderingElement()}</>
}
