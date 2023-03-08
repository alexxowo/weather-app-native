import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../molecules/Card'
import InformationLabel from '../atoms/InformationLabel'
import { useWeather } from '../../hooks/useWeather'

export default function CardContainer() {

  const { data } = useWeather()
  if(!data) return null

  const { main, visibility, wind } = data

  const calculateVisibility = (visibility) => {
    if(visibility < 1000){
      return visibility+'m'
    }else{
      return visibility/1000+'Km'
    }
  }

  return (
    <View>
      <Card>
        <Text style={styles.cardHeaderText}>Principal</Text>
        <InformationLabel text='Temperatura' value={main.temp+'°C'}/>
        <InformationLabel text='Sensación termica' value={main.feels_like+'°C'}/>
        <InformationLabel text='Humedad' value={main.humidity+'%'}/>
        <InformationLabel text='Visibilidad' value={calculateVisibility(visibility)}/>
      </Card>
      <Card>
        <Text style={styles.cardHeaderText}>Vientos</Text>
        <InformationLabel text='Velocidad' value={wind.speed+'m/s'}/>
        <InformationLabel text='Dirección' value={wind.deg+'°'}/>
        <InformationLabel text='Rafagas de viento' value={wind.gust+'m/s'}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  cardHeaderText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  }
})