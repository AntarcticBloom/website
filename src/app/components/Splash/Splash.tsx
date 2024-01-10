import LogoFull from '@/svg/LogoFull'
import css from './Splash.module.scss'

const Splash = () => (
  <div className={css.splash}>
    <div className={css.logoContainer}>
      <LogoFull className={css.logo} />
    </div>
  </div>
)

export default Splash
