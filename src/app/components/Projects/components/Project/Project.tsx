import css from './Project.module.scss'
import { type Project } from '../../../../types'

type Props = {
  project: Project
}

const Project = ({ project }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.logoContainer}>{project.logo}</div>
      <div className={css.descriptionContainer}>
        <h2 className={css.title}>{project.title}</h2>

        {project.subtitle}

        {project.description}
      </div>
    </div>
  )
}

export default Project
