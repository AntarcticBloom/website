'use client'

import { useState, useEffect, createContext, type ReactNode } from 'react'

export type DimensionsContextValue = {
  windowWidth: number
  windowHeight: number
}

export const DimensionsContext = createContext<
  DimensionsContextValue | undefined
>(undefined)

export type DimensionsProviderProps = {
  children: ReactNode | ReactNode[]
}

export const DimensionsProvider = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <DimensionsContext.Provider
      value={{
        windowWidth,
        windowHeight,
      }}
    >
      {children}
    </DimensionsContext.Provider>
  )
}
