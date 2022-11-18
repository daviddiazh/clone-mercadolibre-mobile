import React from 'react';
import { Platform, View } from 'react-native';
import { HeaderIOs } from './ios/Header';
import { HeaderAndroid } from './android/Header';

export const HeaderMain = () => {
  return (
    <View>
      {
        Platform.OS === 'ios'
          ? <HeaderIOs /> 
          : <HeaderAndroid />
      }
    </View>
  )
}
