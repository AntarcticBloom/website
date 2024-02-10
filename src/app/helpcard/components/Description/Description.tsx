import P from '../../../components/P'
import css from './Description.module.scss'
import HelpcardGraphic from '../../../../svg/Helpcard'

const Description = () => {
  return (
    <div className={css.flexContainer}>
      <div className={css.graphicContainer}>
        <HelpcardGraphic />
      </div>

      <P className={css.text}>
        We issue reloadable debit cards to Denver&apos;s unhoused. Unhoused
        beneficiaries and donors alike can choose from preselected initiatives
        and donated funds may only be used for those initiatives.
      </P>
    </div>
  )
}

export default Description
