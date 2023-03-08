import React from 'react'
import {View} from 'react-native'
import CardContainer from '../organism/CardContainer'
import { Button } from 'react-native'
import { useWeather } from '../../hooks/useWeather'

export default function Index() {

  const { getDataAsync } = useWeather()

  const handlePress = (e) => {
    getDataAsync()
  }
  return (
    <View>
      <CardContainer />
      <Button title='Refrescar'
      onPress={handlePress}/>
    </View>
  )
}
