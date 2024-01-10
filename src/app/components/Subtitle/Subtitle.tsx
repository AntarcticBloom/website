import { type ReactNode } from 'react'
import css from './Subtitle.module.scss'

type Props = {
  children: ReactNode
  className?: string
}

const Subtitle = ({ children, className }: Props) => (
  <h3 className={`${css.subtitle} ${className ?? ''}`}>{children}</h3>
)

export default Subtitle
