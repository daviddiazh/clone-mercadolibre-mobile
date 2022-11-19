import React from 'react';
import { StyleSheet, View, Text, Button, Image, Platform, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderMain } from '../components/HeaderMain';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeScreen = ({ navigation }: PropsNavigation) => {

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[ styles.main ]}>
        <HeaderMain navigation={navigation} />

        <LinearGradient
          colors={[ '#ffec0a', '#ebebeb' ]}
          style={{ height: 180 }}
        />
        <Image
          source={require('../images/mainBanner.jpeg')}
          style={[ 
            Platform.OS === 'ios' ? {'marginTop': -350} : {'marginTop': -330},
            Platform.OS === 'ios' ? styles.imageIOs : styles.imageAndroid
          ]}
        />

        <View 
          style={[
            styles.containerHome,
            Platform.OS === 'ios' ? {'marginTop': -180} : {'marginTop': -155}
          ]}
        >

          <View 
            style={[
              styles.firstSection,
            ]}
          >
            <Text style={[ styles.firstSection_blackText ]}>
              <IconMCI name="truck-cargo-container" color="rgb(0, 166, 80)" /> <Text style={[ styles.firstSection_greenText ]}>Envío gratis</Text> en millones de productos desde 70.000
            </Text>
          </View>

          <View>
            <Text></Text>
          </View>



        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingVertical: 0, // Top - Bottom
    paddingHorizontal: 0, // Left - Right
    margin: 0,
    backgroundColor: '#ebebeb',
    flex: 1,
    // fontFamily: 'sans-serif'
    height: '100%',
  },

  imageIOs: {
    resizeMode: 'contain',
    width: '95%', 
    marginVertical: 5, // Top - Bottom
    marginHorizontal: 10, // Left - Right
    justifyContent: 'center'
  },

  imageAndroid: {
    resizeMode: 'contain',
    width: '95%', 
    marginVertical: 0, // Top - Bottom
    marginHorizontal: 12, // Left - Right
    justifyContent: 'center'
  },

  containerHome: {
    padding: 10,
  },

  firstSection: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  firstSection_greenText: {
    color: 'rgb(0, 166, 80)',
    fontWeight: "700",
    fontSize: 12
  },

  firstSection_blackText: {
    textAlign: 'center',
    fontSize: 12
  },

});
