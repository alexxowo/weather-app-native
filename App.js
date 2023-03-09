import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'	
import Constants from 'expo-constants';

import IndexPage from './src/components/pages/Index'

import { WeatherProvider } from './src/context/weatherContext'
import { theme } from './src/theme'

SplashScreen.preventAutoHideAsync()

export default function App () {

  const [fontsLoaded] = useFonts({
    'Nunito-Italic': require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
    'Nunito': require('./assets/fonts/Nunito-VariableFont_wght.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <WeatherProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <IndexPage />
      </View>
    </WeatherProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.background,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20
  }
})

