import css from './Header.module.scss'
import LogoSmall from '@/svg/LogoSmall'

const Header = () => (
  <div className={css.fixedContainer}>
    <LogoSmall />
  </div>
)

export default Header
