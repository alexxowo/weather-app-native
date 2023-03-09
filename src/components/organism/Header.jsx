import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import { faPaperPlane, faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { TextIcon } from '../atoms/TextIcon'
import { useWeather } from '../../hooks/useWeather'

export default function Header() {

  const { data } = useWeather()

  useEffect(() => {
    console.log(data)
  }, [data])

  if(!data) return null

  const {weather, main} = data

  console.log(weather)

  return (
    <View style={styles.header}> 
      <StatusBar/>
      <LinearGradient
        colors={['#0085FF', '#005CB0']}
        style={styles.background} 
      >
         <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Weather App Native</Text>
        </View>

        <View style={styles.headerWrapper}>
          <View style={styles.information}>
            <TextIcon icon={faPaperPlane} text='Ubicación Actual'/>
            <Text style={styles.text}>Judibana, Falcón</Text>
          </View>
          <View style={styles.information}>
            <TextIcon icon={faSnowflake} text='Temperatura'/>
            <Text style={styles.text}>{main.temp+'°C'}</Text>
          </View>
        </View>  

        <View style={styles.weather}>
            <View style={styles.weatherHeaderContainer}>
              <Text style={styles.weatherHeader}>{weather[0].main}</Text>
              <Image style={styles.weatherImage} source={{uri: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}}/>
            </View>
            <Text style={styles.weatherText}>{weather[0].description}</Text>
          </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight,
    position: 'absolute',
  },
  header:{
    height: 220,
  },
  headerText:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text:{
    color: '#fff',
  },
  headerTextContainer:{
    height: '50%',
    justifyContent: 'center',
  },
  headerWrapper: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  information:{

    width: 'auto',
  },
  weather:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherHeader:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  weatherImage:{
    width: 20,
    height: 20,
  },
  weatherHeaderContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

})
