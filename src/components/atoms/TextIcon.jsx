import React from "react"
import {View, Text, StyleSheet } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const TextIcon = ({icon = undefined, text = '', bold}) => {

  return (
    <View style={styles.labelIcon}>
      <FontAwesomeIcon icon={icon} size={16} style={styles.text}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  labelIcon: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})