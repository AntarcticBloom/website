import { useFonts as useExpoFonts } from 'expo-font'

type FontProps = {
  fontsLoaded: boolean
  error: Error | null
}

export const useFonts = (): FontProps => {
  const [fontsLoaded, error] = useExpoFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),

    Silkscreen: require('@tamagui/font-silkscreen/files/slkscr.ttf'),

    DMSans: require('../assets/fonts/DMSans.ttf'),
    'DMSans-Italic': require('../assets/fonts/DMSans-Italic.ttf'),
  })

  return { fontsLoaded, error }
}
