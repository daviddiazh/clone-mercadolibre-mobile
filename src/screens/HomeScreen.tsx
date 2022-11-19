import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image, Platform, ScrollView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import { HeaderMain } from '../components/HeaderMain';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';

export const HomeScreen = ({ navigation }: PropsNavigation) => {

  return (
    <Fragment>
      <HeaderMain navigation={navigation} />
      <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[ styles.main ]}>

        <LinearGradient
          colors={[ '#ffec0a', '#ebebeb' ]}
          style={{ height: 180 }}
        />
        <Image
          source={require('../images/mainBanner.jpeg')}
          style={[ 
            Platform.OS === 'ios' ? {'marginTop': -360} : {'marginTop': -340},
            Platform.OS === 'ios' ? styles.imageIOs : styles.imageAndroid
          ]}
        />

        <View 
          style={[
            styles.containerHome,
            Platform.OS === 'ios' ? {'marginTop': -185} : {'marginTop': -160}
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


          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            <View>
              <View style={[ styles.container_icon]}>
                <IconFA 
                  name="tag" 
                  color="#1259c3" 
                  style={{ fontSize: 20, textAlign: 'center', }}
                />
              </View>
              <Text style={[ styles.text, styles.blueText ]}>Ofertas</Text>
            </View>

            <View>
              <View style={[ styles.container_icon]}>
                <IconMCI name="shopping-outline" style={[ styles.icon]}  />
              </View>
              <Text style={[ styles.text ]}>Súper</Text>
            </View>

            <View>
              <View style={[ styles.container_icon]}>
                <IconIO name="md-car-sport-outline" style={[ styles.icon]}  />
              </View>
              <Text style={[ styles.text ]}>Vehículos</Text>
            </View>

            <View>
              <View style={[ styles.container_icon]}>
                <IconIO name="shirt-outline" style={[ styles.icon]}  />
              </View>
              <Text style={[ styles.text ]}>Moda</Text>
            </View>

            <View>
              <View style={[ styles.container_icon]}>
                <IconIO name="add" style={[ styles.icon]}  />
              </View>
              <Text style={[ styles.text ]}>Ver más</Text>
            </View>

          </View>

          <Image
            source={require('../images/banner2.jpeg')}
            style={[ 
              Platform.OS === 'ios' ? {'marginTop': -80} : {'marginTop': -70},
              Platform.OS === 'ios' ? styles.imageIOs2 : styles.imageAndroid2
            ]}
          />

        </View>

      </View>
    </ScrollView>
    </Fragment>
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
    height: 800
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

  container_icon: {
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingVertical: 10, 
    paddingHorizontal: 10, 
  },

  icon: {
    fontSize: 20,
    textAlign: 'center',
    color: '#807e7e'
  },

  blueText: {
    color: '#1259c3'
  },

  text: {
    fontSize: 8,
    paddingTop: 5,
    textAlign: 'center'
  },

  imageIOs2: {
    resizeMode: 'contain',
    width: '100%',
    justifyContent: 'center'
  },

  imageAndroid2: {
    resizeMode: 'contain',
    width: '100%',
    justifyContent: 'center'
  },

});
