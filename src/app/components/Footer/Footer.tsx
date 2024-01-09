import Image from 'next/image'
import css from './Footer.module.scss'
import FooterLogo from '@/svg/FooterLogo'

const Footer = () => (
  <footer className={css.footer}>
    <Image
      fill={true}
      className={css.image}
      alt="photo of a glacier"
      src="/glacier-footer.png"
    />

    <div className={css.flexContainer}>
      <div className={css.logoContainer}>
        <FooterLogo />
      </div>

      <nav className={css.nav}>
        <ul className={css.list}>
          <h4 className={css.navHeading}>Contact</h4>
          <li className={css.li}>
            <a className={css.link} href="#join">
              Join
            </a>
          </li>
          <li className={css.li}>
            <a className={css.link} href="#join">
              Build
            </a>
          </li>
        </ul>
        <ul>
          <h4 className={css.navHeading}>Projects</h4>
          <li className={css.li}>
            <a className={css.link} href="#join">
              Helpcard
            </a>
          </li>
          <li className={css.li}>
            <a className={css.link} href="#join">
              Innate
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer
