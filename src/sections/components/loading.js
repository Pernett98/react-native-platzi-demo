import React from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'

function Loading(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo} 
        source={require('../../../assets/logo.png')} 
      />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10,
    width: 200,
    height: 80,
    resizeMode: 'contain'
  }
})

export default Loading