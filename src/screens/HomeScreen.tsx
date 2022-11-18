import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { HeaderMain } from '../components/HeaderMain';
import { PropsNavigation } from '../interfaces/IPropsNavigator';

export const HomeScreen = ({ navigation }: PropsNavigation) => {

  return (
    <View style={[ styles.main ]}>
      <HeaderMain navigation={navigation} />

      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat accusantium iste quibusdam! Odio, numquam in soluta cupiditate, dolor, deleniti incidunt quam illo hic iste facilis adipisci ut explicabo vero nisi!</Text>
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
      // height: '100%',
    },

  });
