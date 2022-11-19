import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image, Platform, ScrollView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import { HeaderMain } from '../components/HeaderMain';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';

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
              Platform.OS === 'ios' ? {'marginTop': -180} : {'marginTop': -160}
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

            <View 
              style={[ 
                styles.seenProductOftenContainer,
                Platform.OS === 'ios' ? {'marginTop': -75} : {'marginTop': -60},
              ]}
            >
              <Text style={[ styles.seenProductOften_text ]}>Visto recientemente</Text>
              <View style={[ styles.seenProductOften_insideContainer ]}>
                <Image
                  source={require('../images/iphone.webp')}
                  style={[
                    styles.seenProductOften_image,
                    Platform.OS === 'ios' ? {'marginTop': -50} : {'marginTop': -40},
                  ]}
                />
                <View>
                  <Text style={[ styles.seenProductOften_titleProduct ]}>Celular iPhone 13 Pro Max 128gb</Text>
                  <View style={[ styles.seenProductOften_containerPrice ]}>
                    <Text style={[ styles.seenProductOften_priceProduct ]}>$ 6.299.000</Text>
                    <Text style={[ styles.seenProductOften_discount ]}>13% OFF</Text>
                  </View>
                  <Text style={[ styles.seenProductOften_freeDelivery ]}>Envío gratis</Text>
                </View>
              </View>
              <View 
                style={[
                  Platform.OS === 'ios' ? {'marginTop': -45} : {'marginTop': -35},
                  styles.seenProductOften_moreInfo,
                ]}
              >
                <Text style={[ styles.seenProductOften_moreInfo_text ]}>Ver historial de navegación</Text>
                <IconFA name="angle-right" color="#1259c3" size={17} />
              </View>
            </View>

          </View>

        </View>
      </ScrollView>
      <FooterMenuMain navigation={navigation} />
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
    justifyContent: 'center',
  },

  imageAndroid2: {
    resizeMode: 'contain',
    width: '100%',
    justifyContent: 'center'
  },

  seenProductOftenContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    padding: 10
  },

  seenProductOften_text: {
    color: '#000',
    fontWeight: "700",
    fontSize: 13,
  },

  seenProductOften_insideContainer: {
    flexDirection: 'row',
    width: '100%'
  },

  seenProductOften_image: {
    resizeMode: 'contain',
    width: '30%',
    marginLeft: -10
  },

  seenProductOften_titleProduct: {
    color: '#333',
    paddingTop: 10,
    fontSize: 12.5
  },

  seenProductOften_containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seenProductOften_priceProduct: {
    paddingVertical: 5,
    fontSize: 16.5,
    color: '#000',
    fontWeight: "500"
  },

  seenProductOften_discount: {
    fontSize: 11,
    color: 'rgb(0, 166, 80)',
    paddingLeft: 5
  },

  seenProductOften_freeDelivery: {
    fontSize: 11,
    color: 'rgb(0, 166, 80)',
    fontWeight: "600"
  },

  seenProductOften_moreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  seenProductOften_moreInfo_text: {
    color: '#1259c3',
    fontWeight: "600",
    fontSize: 11
  }

});
