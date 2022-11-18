import React from 'react'
import { Button, Text, View } from 'react-native'
import { HeaderMain } from '../components/HeaderMain';
import { PropsNavigation } from '../interfaces/IPropsNavigator';

export const SearchScreen = ({ navigation }: PropsNavigation) => {
  return (
    <View>
        <HeaderMain navigation={ navigation } />
        <Text>SearchScreen</Text>
        <Button
        title="Go to Home Screen"
        onPress={ () => navigation.navigate('HomeScreen') }
      />
    </View>
  )
}
