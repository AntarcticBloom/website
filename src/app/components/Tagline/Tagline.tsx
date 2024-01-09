import css from './Tagline.module.scss'
import { useDimensions } from '@/app/hooks'
import TaglineGraphic from '../../../svg/Tagline'
import MobileGraphic from '../../../svg/TaglineMobile'

const Tagline = () => {
  const { windowWidth } = useDimensions()

  return (
    <div className={css.container}>
      {windowWidth > 768 ? <TaglineGraphic /> : <MobileGraphic />}
    </div>
  )
}

export default Tagline
