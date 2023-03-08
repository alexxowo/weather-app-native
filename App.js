import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useWeather } from './src/hooks/useWeather'

import IndexPage from './src/components/pages/Index'
import Header from './src/components/organism/Header'

import { WeatherProvider } from './src/context/weatherContext'

SplashScreen.preventAutoHideAsync()

export default function App () {

  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    async function prepare () {
      try {
        new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync()
    }
  }, [appReady])

  if (!appReady) return null

  return (
    <WeatherProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <Header />
        <IndexPage />
      </View>
    </WeatherProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f1f1f1'
  }
})

