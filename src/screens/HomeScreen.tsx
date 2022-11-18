import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderMain } from '../components/HeaderMain';

export const HomeScreen = () => {
  return (
    <View style={[ styles.main ]}>
        <HeaderMain />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
      paddingVertical: 0, // Top - Bottom
      paddingHorizontal: 0, // Left - Right
      margin: 0,
      backgroundColor: '#fff',
      // fontFamily: 'sans-serif'
      height: '100%',
    },

  });
