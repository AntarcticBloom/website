import css from './P.module.scss'
import { type ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const P = ({ children, className }: Props) => {
  return <p className={`${css.p} ${className}`}>{children}</p>
}

export default P
