import { type Project } from '../../types'
import InnateGraphic from '../../../svg/Innate'
import Subtitle from '../../components/Subtitle'
import HelpcardGraphic from '../../../svg/Helpcard'
import InnateDescription from './components/InnateDescription'
import HelpcardDescription from './components/HelpcardDescription'

export const projects: Project[] = [
  {
    title: 'helpcard',
    subtitle: (
      <Subtitle>
        Targeted direct aid for unhoused people. Peace of mind for donors.
      </Subtitle>
    ),
    logo: <HelpcardGraphic />,
    internalProjectLink: '/helpcard',
    description: <HelpcardDescription />,
  },
  {
    title: 'innate',
    subtitle: (
      <Subtitle>Helpful software licensed to helpful organizations.</Subtitle>
    ),
    logo: <InnateGraphic />,
    description: <InnateDescription />,
  },
]
