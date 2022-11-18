import React from 'react';
import { StyleSheet, View, Text, Button, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderMain } from '../components/HeaderMain';
import { PropsNavigation } from '../interfaces/IPropsNavigator';

export const HomeScreen = ({ navigation }: PropsNavigation) => {

  // const mTopBanner = (Platform.OS === 'ios') ? marginTop: -120 : marginTop: -120;

  return (
    <View style={[ styles.main ]}>
      <HeaderMain navigation={navigation} />

      {/* <View style={[ styles.bgFirstSection ]}>
        <Image
          source={require('../images/banner1.jpeg')}
          style={[ styles.image, Platform.OS === 'ios' ? {'marginTop': -140} : {'marginTop': -120} ]} 
        />
      </View> */}

      <LinearGradient
        colors={[ '#ffec0a', '#fff' ]}
        style={{ height: 160 }}
      >
        <Image
          source={require('../images/banner1.jpeg')}
          style={[ styles.image, Platform.OS === 'ios' ? {'marginTop': -140} : {'marginTop': -120} ]} 
        />
      </LinearGradient>
      
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingVertical: 0, // Top - Bottom
    paddingHorizontal: 0, // Left - Right
    margin: 0,
    backgroundColor: '#fff',
    flex: 1,
    // fontFamily: 'sans-serif'
    height: '100%',
  },

  bgFirstSection: {
    // backgroundImage: "linear-gradient(360deg, #ffffff 0%, #ffec0a 100%)",

  },

  image: {
    resizeMode: 'contain',
    width: '95%',
    marginVertical: 5, // Top - Bottom
    marginHorizontal: 10, // Left - Right
    justifyContent: 'center'
  }

});
