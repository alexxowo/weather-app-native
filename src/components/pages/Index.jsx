import React from 'react'
import {View, Text, StyleSheet, Image,ScrollView, TouchableNativeFeedback, Alert} from 'react-native'
import { theme } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuestionCircle, faWind, faUmbrella, faWater } from '@fortawesome/free-solid-svg-icons'

export default function Index() {

  return (
    <View>
      <View style={[styles.inlineContainer, { alignItems: 'center'}]}>
        <View>
          <Text style={theme.styles.text.Header}>Punto Fijo</Text>
          <Text style={theme.styles.text.Normal}>09 Marzo, Jueves</Text>
        </View>
        <View>
          <TouchableNativeFeedback onPress={() => Alert.alert('About', 'Weather App With React Native, for practices purposes, built with expo, using the OpenWeather API, and little bit of love ♥️.')}>
            <View>
              <FontAwesomeIcon icon={faQuestionCircle} size={24} style={theme.styles.text.Header}/>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.tempLabel}>26°</Text>
          <Text style={theme.styles.text.Normal}>Soleado</Text>
        </View>
        <View>
          <Image source={{uri: 'https://openweathermap.org/img/wn/02d@2x.png'}} style={{width: 100, height: 100}}/>
        </View>
      </View>
      <View style={[styles.inlineContainer, styles.statsCard]}>
        <View style={{justifyContent:'center', alignItems: 'center', gap:8}}>
          <FontAwesomeIcon icon={faWater} size={24} style={[theme.styles.text.Header, {color: theme.colors.primary}]}/>
          <Text style={theme.styles.text.Header}>69%</Text>
          <Text style={theme.styles.text.Normal}>Humedad</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', gap:8}}>
          <FontAwesomeIcon icon={faWind} size={24} style={[theme.styles.text.Header, {color: theme.colors.primary}]}/>
          <Text style={theme.styles.text.Header}>9.86 m/s</Text>
          <Text style={theme.styles.text.Normal}>Viento</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', gap:8}}>
          <FontAwesomeIcon icon={faUmbrella} size={24} style={[theme.styles.text.Header, {color: theme.colors.primary}]}/>
          <Text style={theme.styles.text.Header}>0%</Text>
          <Text style={theme.styles.text.Normal}>Lluvia</Text>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={[styles.inlineContainer, { gap:16, marginTop: 12}]}>
          <View style={styles.forecastCard}>
            <Text style={theme.styles.text.Secundary}>5pm</Text>
            <Image source={{uri: 'https://openweathermap.org/img/wn/01d@2x.png'}} style={{width: 40, height: 30}}/>
            <Text style={theme.styles.text.Normal}>24°</Text>
          </View>
          <View style={styles.forecastCard}>
            <Text style={theme.styles.text.Secundary}>6pm</Text>
            <Image source={{uri: 'https://openweathermap.org/img/wn/10d@2x.png'}} style={{width: 40, height: 30}}/>
            <Text style={theme.styles.text.Normal}>24°</Text>
          </View>
          <View style={styles.forecastCard}>
            <Text style={theme.styles.text.Secundary}>7pm</Text>
            <Image source={{uri: 'https://openweathermap.org/img/wn/02d@2x.png'}} style={{width: 40, height: 30}}/>
            <Text style={theme.styles.text.Normal}>24°</Text>
          </View>
          <View style={styles.forecastCard}>
            <Text style={theme.styles.text.Secundary}>8pm</Text>
            <Image source={{uri: 'https://openweathermap.org/img/wn/01n@2x.png'}} style={{width: 40, height: 30}}/>
            <Text style={theme.styles.text.Normal}>24°</Text>
          </View>
          <View style={styles.forecastCard}>
            <Text style={theme.styles.text.Secundary}>9pm</Text>
            <Image source={{uri: 'https://openweathermap.org/img/wn/02n@2x.png'}} style={{width: 40, height: 30}}/>
            <Text style={theme.styles.text.Normal}>24°</Text>
          </View>
        </View>
      </ScrollView>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tempLabel:{
    fontSize: 64,
    color: '#fff',
    fontWeight: 'bold',
  },
  inlineContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsCard: {
    backgroundColor: '#282833',
    borderRadius: 10,
    padding: 24,
  },
  forecastCard: {
    backgroundColor: '#282833',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 16,
    width: 'auto',
  }

})