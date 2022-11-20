import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';

export const FooterMenuAndroid = ({navigation}: any) => {
  return (
    <View style={[ styles.main ]}>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeScreen')}>
        <View>
          <IconSLI 
            name="home" 
            color="#1259c3"
            style={[ styles.icon ]}
          />
          <Text style={[ styles.text, styles.blueText ]}>Inicio</Text>
        </View>
      </TouchableWithoutFeedback>

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
    paddingVertical: 12,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ebebeb'
  },

  icon: {
    fontSize: 20,
    paddingBottom: 5,
    textAlign: 'center'
  },

  text: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: "600"
  },

  blueText: {
    color: '#1259c3'
  },

});