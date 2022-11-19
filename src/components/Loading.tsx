import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
      }}
    >
      <ActivityIndicator 
        size={ 50 }
        color="#000"
      />
    </View>
  );
}

