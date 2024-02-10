import css from './HelpcardHeader.module.scss'
import HelpcardGraphic from '../../../../svg/Helpcard'

const HelpcardHeader = () => {
  return (
    <div className={css.graphicContainer}>
      <HelpcardGraphic />
    </div>
  )
}

export default HelpcardHeader
