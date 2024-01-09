import css from './P.module.scss'
import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const P = ({ children }: Props) => {
  return <p className={css.p}>{children}</p>
}

export default P
