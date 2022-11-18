import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FooterMenuIOs = () => {
  return (
    <View style={[ styles.main ]}>
        <Text>Desde iOs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
      bottom: 0,
      position: 'absolute',
      backgroundColor: 'blue',
      padding: 20,
    }
});