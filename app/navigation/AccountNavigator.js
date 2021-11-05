import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AccountScreen from '../screens/AccountScreen'
import UpdateNavigator from './UpdateNavigator'

const Stack = createNativeStackNavigator()
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="My Account" component={AccountScreen} />
    <Stack.Screen name="My Listings" component={UpdateNavigator} />
  </Stack.Navigator>
)

export default AccountNavigator
