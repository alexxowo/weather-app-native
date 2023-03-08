import React, { useEffect, useState } from "react"
import { createContext } from "react"
import * as Location from 'expo-location';
import { getWeatherAsync } from '../services/OpenWeatherService'

export const WeatherContext = createContext({
  data: {},
  location: {},
  errorMsg: null,
  getDataAsync: () => {},
  getLocationAsync: () => {},
})

export const WeatherProvider = ({ children }) => {

  const [data, setData] = useState(null)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const getDataAsync = async () => {
    if(!location) {
      setErrorMsg('No location')
      return null
    }

    const { coords } = location
    const { latitude, longitude } = coords
    const data = await getWeatherAsync(latitude, longitude)
    setData(data)
  }

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }

    let currentPosition = await Location.getCurrentPositionAsync({})
    setLocation(currentPosition)
    console.log('currentPosition', location)
  }

  useEffect(() => {
    getLocationAsync()
  }, [])

  useEffect(() => {
    getDataAsync()
  }, [location])


  return (
    <WeatherContext.Provider value={{ data, location, errorMsg, getDataAsync, getLocationAsync }}>
      {children}
    </WeatherContext.Provider>
  )

}