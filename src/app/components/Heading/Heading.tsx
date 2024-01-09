import css from './Heading.module.scss'
import { type ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const Heading = ({ children, className }: Props) => (
  <h1 className={`${css.heading} ${className}`}>{children}</h1>
)

export default Heading
