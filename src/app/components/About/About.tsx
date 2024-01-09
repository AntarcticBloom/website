import P from '../P'
import Image from 'next/image'
import Heading from '../Heading'
import Subtitle from '../Subtitle'
import css from './About.module.scss'

const About = () => (
  <section className={css.container}>
    <Heading className={css.heading}>who we are</Heading>

    <div className={css.personHeadingContainer}>
      <Subtitle className={`${css.personHeading} ${css.name}`}>
        Jeff Reynolds
      </Subtitle>
      <Subtitle className={`${css.personHeading} ${css.title}`}>
        Software Engineer | Activist
      </Subtitle>
    </div>

    <div className={css.flexContainer}>
      <div className={css.imageContainer}>
        <Image
          width={500}
          height={500}
          className={css.image}
          src="/headshot-Jeff.png"
          alt="portrait of Jeff Reynolds"
        />
      </div>

      <div className={css.textContainer}>
        <P>
          I&apos;m tired of the lack of accountability around socioeconomic and
          climate issues. I think that tech can empower us to take the solution
          of these problems into our own collective hands.
        </P>
        <P>
          I&apos;ve taken a vow of silence from producing code that exacerbates
          climate uninhabitability and worsens the wealth gap.
        </P>
        <P>
          When I&apos;m not coding, I&apos;m a union-represented passenger train
          operator, encouraging adoption of public transit and making a tangible
          difference for working people.
        </P>
      </div>
    </div>
  </section>
)

export default About
