import { useContext } from "react"
import { WeatherContext } from "../context/weatherContext"

export const useWeather = () => {
  const { data, location, errorMsg, getDataAsync, getLocationAsync } = useContext(WeatherContext)
  return { data, location, errorMsg, getDataAsync, getLocationAsync }
}