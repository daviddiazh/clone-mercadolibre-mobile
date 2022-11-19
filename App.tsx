import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigator/StackNavigator';
import { FooterMenuMain } from './src/components/FooterMenu/FooterMenuMain';

const App = () => {

  return (
    <NavigationContainer>        

      <SafeAreaView style={[ styles.mainApplication ]} />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}}>

        <StackNavigator />
        
        <StatusBar backgroundColor="#ffec0a" />

          {/* <HomeScreen /> */}

        {/* <FooterMenuMain /> */}
      </SafeAreaView> 

    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  mainApplication: {
    padding: 0,
    margin: 0,
    flex: 0,
    backgroundColor: '#ffec0a', //ios
    bottom: 0,
    // fontFamily: 'sans-serif'
    // height: '100%',
  },
});

export default App;
