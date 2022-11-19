import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';

export const FooterMenuIOs = () => {
  return (
    <View style={[ styles.main ]}>

      <View>
        <IconSLI 
          name="home" 
          color="#1259c3"
          style={{ fontSize: 20, textAlign: 'center', paddingBottom: 5 }}
        />
        <Text style={[ styles.text, styles.blueText ]}>Inicio</Text>
      </View>

      <View>
        <IconAD name="hearto" style={[ styles.icon ]} />
        <Text style={[ styles.text ]}>Favoritos</Text>
      </View>

      <View>
        <IconSLI name="handbag" style={[ styles.icon ]} />
        <Text style={[ styles.text ]}>Mis Compras</Text>
      </View>

      <View>
        <IconIO name="notifications-outline" style={[ styles.icon ]} />
        <Text style={[ styles.text ]}>Notificaciones</Text>
      </View>

      <View>
        <IconF name="menu" style={[ styles.icon ]} />
        <Text style={[ styles.text ]}>Más</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },

  // iconAndText: {
  //   paddingHorizontal: 14
  // },

  icon: {
    fontSize: 20,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#807e7e'
  },

  text: {
    fontSize: 9,
    textAlign: 'center'
  },

  blueText: {
    color: '#1259c3'
  },

});