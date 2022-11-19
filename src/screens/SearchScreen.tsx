import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { PropsNavigation } from '../interfaces/IPropsNavigator';

export const SearchScreen = ({ navigation }: PropsNavigation) => {
  return (
    <View>
      <View style={[ styles.main ]}>
      <View style={[ styles.header ]}>

        <View style={[ styles.container_search ]}>
          <View style={[ styles.input ]}>
            <Icon name="search-outline" color="#8f8f8d" style={{ paddingRight: 10 }} />
            <TextInput 
              placeholder='Buscar en Mercado Libre' 
              placeholderTextColor={"grey"} 
              autoFocus={true}
            />
          </View>
        </View>

        <Text
          onPress={ () => navigation.navigate('HomeScreen') }
        >Cancelar</Text>

      </View>

    </View>
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
    height: 65,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container_search: {
    width: '80%',
    display: 'flex'
  },

  input: {
    width: '100%',
    // flex: 8,
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 12.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderTopRightRadius: 100,
    // borderBottomRightRadius: 100,
    borderRadius: 100,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  text_send: {
    fontSize: 13,
    color: '#333'
  }
});
