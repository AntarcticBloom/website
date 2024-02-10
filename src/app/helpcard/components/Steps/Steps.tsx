import Image from 'next/image'
import css from './Steps.module.scss'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import HowItWorks from '../../../../svg/HowItWorks'

const Steps = () => (
  <section className={css.container}>
    <div className={css.stepOneFlexContainer}>
      <div className={css.howItWorks}>
        <HowItWorks />
      </div>
    </div>

    <div className={css.imageContainer}>
      <div className={css.stepOne}>
        <Step1 />
      </div>
      <Image
        fill={true}
        className={css.image}
        src="/GiveVisualSimple.png"
        alt="photo of a donor giving a helpcard"
      />
      <div className={css.stepTwo}>
        <Step2 />
      </div>
    </div>

    <div className={css.scanVisualContainer}>
      <Image
        fill={true}
        className={css.scanVisualImage}
        src="/helpcard-scan-visual.png"
        alt="photo of a donor giving a helpcard"
      />
      <div className={css.stepThree}>
        <Step3 />
      </div>
    </div>
  </section>
)

export default Steps
