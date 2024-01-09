import { Platform } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useMemo, useState } from 'react'

/** Prevent the splash screen from auto-hiding before asset loading is complete. */
SplashScreen.preventAutoHideAsync()

export type UseSplashScreenHookProps = {
  shouldDisplaySplashScreen: boolean
  fontsLoaded: boolean
  /** ...other stuff that determines whether we can dismiss the splash screen. */
}

export type UseSplashScreenHookReturnValue = {
  rootViewProps: {
    /** Native only: the callback when the view is laid out */
    onLayout?: () => void
  }
}

export const useSplashScreen = ({
  fontsLoaded,
}: UseSplashScreenHookProps): UseSplashScreenHookReturnValue => {
  const shouldDisplaySplashScreen = useMemo(
    () =>
      !fontsLoaded /* && any other stuff that needs to happen during splash screen */,
    [fontsLoaded],
  )

  const onLayoutRootView = useCallback(async () => {
    if (shouldDisplaySplashScreen) return
    await SplashScreen.hideAsync()
  }, [fontsLoaded, shouldDisplaySplashScreen])

  const rootViewProps = useMemo(
    () => ({
      /** Suppress error 'onLayout' prop not recognized on DOM node by only providing it on Native */
      ...(Platform.OS === 'web' ? {} : { onLayout: onLayoutRootView }),
    }),
    [onLayoutRootView, fontsLoaded],
  )

  return { rootViewProps }
}
