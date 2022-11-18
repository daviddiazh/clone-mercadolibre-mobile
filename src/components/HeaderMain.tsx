import React from 'react';
import { Platform, View } from 'react-native';
import { HeaderIOs } from './ios/Header';
import { HeaderAndroid } from './android/Header';

export const HeaderMain = ({navigation}: any) => {
  return (
    <View>
      {
        Platform.OS === 'ios'
          ? <HeaderIOs navigation={navigation} /> 
          : <HeaderAndroid />
      }
    </View>
  )
}
