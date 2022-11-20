import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconAD from 'react-native-vector-icons/AntDesign';

export const HeaderAndroid = ({navigation}: any) => {

  const route = useRoute();

  return (
    <View style={[ styles.main ]}>
      <View style={[ styles.header ]}>
        {
          route.name == 'ProductListScreen' 
            ? <IconAD 
                name="arrowleft" 
                style={{ paddingTop: 7.5, fontSize: 20, color: '#000' }}
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
              
              {/* <TextInput placeholder='Buscar en Mercado Libre' /> */}
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Icon name="cart-outline" color="#000" size={25} style={{ paddingTop: 5 }} />

      </View>

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
    backgroundColor: '#faea07',
    height: 95,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container_search: {
    width: '85%',
    display: 'flex',
  },

  input: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
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
    fontSize: 14.5,
    color: '#333'
  }
});
