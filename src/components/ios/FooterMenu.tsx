import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';

export const FooterMenuIOs = () => {
  return (
    <View style={[ styles.main ]}>

      <View
        style={[ styles.iconAndText ]}
      >
        <IconSLI 
          name="home" 
          color="#1259c3"
          style={[ styles.icon ]}
        />
        <Text style={[ styles.text, styles.blueText ]}>Inicio</Text>
      </View>

      <View
        style={[ styles.iconAndText ]}
      >
        <IconAD name="hearto" style={[ styles.icon ]} />
        <Text style={[ styles.text ]}>Favoritos</Text>
      </View>

      <View
        style={[ styles.iconAndText ]}
      >
        <IconSLI name="handbag" style={[ styles.icon ]} />
        <Text style={[ styles.text ]}>Mis Compras</Text>
      </View>

      <View
        style={[ styles.iconAndText ]}
      >
        <IconIO name="notifications-outline" style={[ styles.icon ]} />
        <Text style={[ styles.text ]}>Notificaciones</Text>
      </View>

      <View
        style={[ styles.iconAndText ]}
      >
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
    width: '100%'
  },

  iconAndText: {
    paddingHorizontal: 14
  },

  icon: {
    fontSize: 20,
    paddingBottom: 5,
    textAlign: 'center'
  },

  text: {
    fontSize: 10
  },

  blueText: {
    color: '#1259c3'
  },

});