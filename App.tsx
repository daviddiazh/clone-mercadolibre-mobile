import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {

  return (
    <SafeAreaView style={[ styles.mainApplication ]}>
      <StatusBar backgroundColor="#fcec32" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <HomeScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainApplication: {
    padding: 0,
    margin: 0,
    backgroundColor: '#ffec0a', //ios
    // fontFamily: 'sans-serif'
    // height: '100%',
  }
});

export default App;
