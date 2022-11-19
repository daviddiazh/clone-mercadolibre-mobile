import React from 'react'
import { Platform, View } from 'react-native'
import { FooterMenuAndroid } from '../android/FooterMenu';
import { FooterMenuIOs } from '../ios/FooterMenu';

export const FooterMenuMain = ({navigation}: any) => {
  return (
    <View>
      {
        Platform.OS === 'ios'
          ? <FooterMenuIOs navigation={navigation} />
          : <FooterMenuAndroid navigation={navigation} /> 
      }
    </View>
  )
}
