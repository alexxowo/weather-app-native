import { View, Text } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={{
        width: '100%',
        height: '100%',
        flex:1,
        alignContent:'center',
        justifyContent: 'center'
      }}>
      <Text >Loading...</Text>
    </View>
  )
}