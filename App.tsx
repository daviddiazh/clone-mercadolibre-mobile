import 'react-native-gesture-handler';

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from './src/screens/HomeScreen';
import { StackNavigator } from './src/navigator/StackNavigator';
import { FooterMenuMain } from './src/components/FooterMenu/FooterMenuMain';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SearchScreen } from './src/screens/SearchScreen';

const App = () => {

  return (
    <NavigationContainer>
        {/* <StackNavigator /> */}

      <SafeAreaView style={[ styles.mainApplication ]} />
        <SafeAreaView style={{ flex:1, backgroundColor: '#fff'}}>

        <StackNavigator />
        
        <StatusBar backgroundColor="#ffec0a" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={{ flex: 1, backgroundColor: 'white' }} >
            {/* <HomeScreen /> */}

            
            {/* <FooterMenuMain /> */}

          </View>
        </ScrollView> 
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
  }
});

export default App;
