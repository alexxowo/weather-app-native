
const API_KEY = '1bcae94adaa52c05c5f2dd4e922d47f2'

export const getWeatherAsync = async (lat, lon) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
  const response = await data.json()
  return response
}