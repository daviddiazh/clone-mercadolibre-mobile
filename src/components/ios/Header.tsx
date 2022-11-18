import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const HeaderIOs = () => {
  return (
    <View style={[ styles.main ]}>
        <TextInput
            style={[ styles.input ]}
            placeholder="Buscar en Mercado Libre"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
      paddingVertical: 10, // Top - Bottom
      paddingHorizontal: 10, // Left - Right
      margin: 0,
      backgroundColor: '#fcec32',
      // fontFamily: 'sans-serif'
      height: 70,
    },

    input: {
        width: '85%',
        height: 25,
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 20,
    }

  });
