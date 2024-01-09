import Image from 'next/image'
import Heading from '../Heading'
import css from './Projects.module.scss'
import { type Project } from '../../types'
import { useState, useCallback } from 'react'
import ProjectDetail from './components/Project'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

type Props = {
  projects: Project[]
}

const ANIMATION_DURATION = 500

const Projects = ({ projects }: Props) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const [fadedOut, setFadedOut] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  const waitForAnimationDuration = async () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), ANIMATION_DURATION)
    })

  const nextProject = useCallback(async () => {
    setFadingOut(true)
    await waitForAnimationDuration()
    setFadedOut(true)

    if (currentProjectIndex === projects.length - 1) {
      setCurrentProjectIndex(0)
    } else {
      setCurrentProjectIndex(currentProjectIndex + 1)
    }

    setFadedOut(false)
    setFadingOut(false)
  }, [currentProjectIndex, projects])

  const previousProject = useCallback(async () => {
    setFadingOut(true)
    await waitForAnimationDuration()
    setFadedOut(true)

    if (currentProjectIndex === 0) {
      setCurrentProjectIndex(projects.length - 1)
    } else {
      setCurrentProjectIndex(currentProjectIndex - 1)
    }

    setFadedOut(false)
    setFadingOut(false)
  }, [currentProjectIndex, projects])

  return (
    <div className={css.container}>
      <Image
        fill={true}
        src="/glacier.png"
        className={css.image}
        alt="Image of a glacier"
      />

      <Heading className={css.title}>projects</Heading>

      <button
        onClick={previousProject}
        className={`${css.chevronButton} ${css.left}`}
      >
        <MdChevronLeft size={72} color="#FF0056" />
      </button>

      {!fadedOut && (
        <div
          className={`${css.animationContainer} ${
            fadingOut ? css.fadingOut : css.fadingIn
          }`}
        >
          <ProjectDetail project={projects[currentProjectIndex]} />
        </div>
      )}

      <button
        onClick={nextProject}
        className={`${css.chevronButton} ${css.right}`}
      >
        <MdChevronRight size={72} color="#FF0056" />
      </button>
    </div>
  )
}

export default Projects
