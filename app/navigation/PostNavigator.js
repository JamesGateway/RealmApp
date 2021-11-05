import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListingEditScreen from '../screens/ListingEditScreen'
import Scan from '../screens/Scan'

const Stack = createNativeStackNavigator()

const PostNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Post" component={ListingEditScreen} />
    <Stack.Screen name="ScanQR" component={Scan} />
  </Stack.Navigator>
)

export default PostNavigator
