import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function InformationLabel({text, value}) {
  return (
    <View style={styles.informationLabel}>
      <Text>{text}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  informationLabel:{	
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})