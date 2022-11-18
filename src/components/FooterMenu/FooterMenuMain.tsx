import React from 'react'
import { Platform, View } from 'react-native'
import { FooterMenuAndroid } from '../android/FooterMenu';
import { FooterMenuIOs } from '../ios/FooterMenu';

export const FooterMenuMain = () => {
  return (
    <View>
      {
        Platform.OS === 'ios'
          ? <FooterMenuIOs />
          : <FooterMenuAndroid /> 
      }
    </View>
  )
}
