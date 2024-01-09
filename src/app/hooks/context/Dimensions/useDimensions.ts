import { useContext } from 'react'
import { DimensionsContext } from './DimensionsProvider'

export const useDimensions = () => {
  const dimensions = useContext(DimensionsContext)

  if (!dimensions) {
    throw new Error('useDimensions must be used within a DimensionsProvider')
  }

  return dimensions
}
