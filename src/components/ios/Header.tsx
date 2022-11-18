import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HeaderIOs = () => {
  return (
    <View style={[ styles.main ]}>
      <View style={[ styles.header ]}>
        <TextInput
          style={[ styles.input ]}
          placeholder="Buscar en Mercado Libre"
        />

        <Icon name="rocket" size={30} color="#000" />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
      paddingVertical: 10, // Top - Bottom
      paddingHorizontal: 10, // Left - Right
      margin: 0,
      backgroundColor: '#ffec0a',
      // fontFamily: 'sans-serif'
      height: 70,
    },

    header: {
      display: 'flex',
    },

    input: {
      width: '85%',
      height: 25,
      backgroundColor: '#fff',
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 100,
    }

  });
