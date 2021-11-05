import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, StatusBar } from 'react-native'
import { useAuth } from '../realm/providers/AuthProvider'
import Button from '../components/Button'

function WelcomeScreen({ navigation }) {
  const { user } = useAuth()

  useEffect(() => {
    if (user != null) {
      navigation.navigate('AppMeo')
    }
  }, [user])

  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.png')}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>Ameo</Text>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    borderRadius: 50,
    height: 100,
    width: 100
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }
})

export default WelcomeScreen
