import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export const useLocation = () => {

  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(true)

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync()
    setLocation(location)
    setLoading(false)
  }

  useEffect(() => {
    getLocation()
  }, [])

  return { location, errorMsg, loading, getLocation }
}