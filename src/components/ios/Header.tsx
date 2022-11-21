import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconAD from 'react-native-vector-icons/AntDesign';


export const HeaderIOs = ({navigation}: any) => {

  const route = useRoute(); 
  
  return (
    <View style={[ styles.main ]}>
      {
        route.name != 'ProductDetailsScreen'
          ? (
            <View style={[ styles.header ]}>
              {
                route.name == 'ProductListScreen' 
                  ? <IconAD 
                      name="arrowleft" 
                      style={{ paddingTop: 5, fontSize: 17 }}
                      onPress={ () => navigation.goBack() }
                    /> 
                  : null
              }
              <View style={[ styles.container_search ]}>
                <TouchableWithoutFeedback
                  onPress={ () => navigation.navigate('SearchScreen') } 
                >
                  <View style={[ styles.input ]}>
                    <Icon name="search-outline" color="#8f8f8d" style={{ paddingRight: 10 }} />
                    <View>
                      <Text>Buscar en Mercado Libre</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <Icon name="cart-outline" color="#000" size={20} />

            </View>
          ) : (
            <View style={[ styles.containerHeaderProductId ]}>
              <IconAD 
                name="arrowleft" 
                style={[ styles.headerProductId_icon ]}
                onPress={ () => navigation.goBack() }
              />

              <View style={{ flexDirection: 'row' }}>
                <IconAD name="hearto" style={[ styles.headerProductId_icon ]} color="#000" />
                <Icon name="search-outline" color="#000" style={[ styles.headerProductId_icon ]} onPress={ () => navigation.navigate('SearchScreen') } />
                <Icon name="cart-outline" color="#000" style={[ styles.headerProductId_icon ]} />
              </View>
            </View>
          )
      }

      <Text
        style={[ styles.text_send ]}
      >
        <Icon name="location-outline" /> Enviar a David Diaz H - Medellin, Antioquia
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingVertical: 10, // Top - Bottom
    paddingHorizontal: 15, // Left - Right
    margin: 0,
    backgroundColor: '#ffec0a',
    // fontFamily: 'sans-serif'
    height: 80,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container_search: {
    width: '85%',
    flexDirection: 'row',
  },

  input: {
    width: '100%',
    // flex: 8,
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    backgroundColor: '#fff',
    fontSize: 12.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  text_send: {
    fontSize: 13,
    color: '#333'
  },


  containerHeaderProductId: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingBottom: 15
  },

  headerProductId_icon: {
    marginTop: 5,
    fontSize: 20,
    color: '#000',
    paddingHorizontal: 5
  }

});
