import Heading from '../Heading'
import Subtitle from '../Subtitle'
import css from './CTA.module.scss'
import Flowers from '@/svg/Flowers'
import { useDimensions } from '@/app/hooks'
import { useRef, useState, useEffect } from 'react'

const CTA = () => {
  const { windowWidth } = useDimensions()
  const graphicRef = useRef<SVGSVGElement>(null)

  const [graphicHeight, setGraphicHeight] = useState(0)

  useEffect(() => {
    if (graphicRef.current)
      setGraphicHeight(graphicRef.current.getBoundingClientRect().height)
  }, [windowWidth])

  return (
    <div className={css.container}>
      <div className={css.svgContainer}>
        <Flowers ref={graphicRef} />
      </div>

      <div
        style={{ height: 0.4 * graphicHeight }}
        className={css.textContainer}
      >
        <Heading className={css.heading}>have an idea?</Heading>
        <Subtitle className={css.subtitle}>let&apos;s build something</Subtitle>
      </div>
    </div>
  )
}

export default CTA
