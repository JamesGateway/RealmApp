import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Logout } from '../components/Logout'

import defaultStyles from '../config/styles'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import AppNavigator from './AppNavigator'

const Stack = createNativeStackNavigator()
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerStyle: { backgroundColor: defaultStyles.colors.primary } }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerStyle: { backgroundColor: defaultStyles.colors.secondary } }}
    />
    <Stack.Screen name="AppMeo" component={AppNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default AuthNavigator
