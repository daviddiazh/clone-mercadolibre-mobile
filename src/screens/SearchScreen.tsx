import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import { ProductContext } from '../context/ProductContext';

export const SearchScreen = ({ navigation }: PropsNavigation) => {

  const [ userInput, setUserInput ] = useState('');

  const { getProducts, products } = useContext( ProductContext ); 

  useEffect(() => {
    getProducts(userInput);
  }, [userInput]);


  const searchProducts = (productTitle: any) => {
    getProducts(productTitle);
    navigation.navigate('ProductListScreen');
  }

  
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
                onChangeText={ newText => setUserInput(newText) }
                value={ userInput }
              />
            </View>
          </View>

          <Text
            onPress={ () => navigation.goBack() }
          >Cancelar</Text>

        </View>

      </View>


      <View style={[ styles.autocomplete ]}>
        {
          products && products?.results?.filter(product => product.title?.toLowerCase().includes(userInput.toLowerCase())).map( product => (
            <TouchableOpacity 
              key={ product?.id } 
              style={[ styles.autocompleteElement ]}
              onPress={ () => searchProducts( product.title ) }
              activeOpacity={ 0.75 }
            >              
              <Icon name="search-outline" color="#8f8f8d" style={[ styles.leftIconAutocomplete ]} />
              <Text style={[ styles.textAutocomplete ]}>{product?.title?.length! >= 42 ? product?.title?.substring(0, 42) + '...' : product.title}</Text> 
            </TouchableOpacity>
          ))
        }
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
    height: 50,
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
  },

  autocomplete: {
    
  },

  autocompleteElement: {
    paddingVertical: 13,
    display: 'flex',
    fontWeight: "500",
    flexDirection: 'row',
    alignItems: 'center',
  },

  leftIconAutocomplete: {
    paddingHorizontal: 10,
    fontSize: 17
  },

  textAutocomplete: {
    paddingLeft: 0,
    fontWeight: "600",
  }
});
