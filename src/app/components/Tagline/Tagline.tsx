import P from '@/app/components/P'
import css from './Tagline.module.scss'
import { useDimensions } from '@/app/hooks'
import TaglineGraphic from '../../../svg/Tagline'
import MobileGraphic from '../../../svg/TaglineMobile'

const Tagline = () => {
  const { windowWidth } = useDimensions()

  return (
    <div className={css.container}>
      {windowWidth > 768 ? <TaglineGraphic /> : <MobileGraphic />}
      <P className={css.text}>
        A 501(c)(3) and software development collective dedicated to making the
        world more hospitable for everyone.
      </P>
    </div>
  )
}

export default Tagline
