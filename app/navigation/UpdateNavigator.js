import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import ListingUpdateScreen from '../screens/ListingUpdateScreen'
import MyListingsScreen from '../screens/MyListingsScreen.js'

const Stack = createNativeStackNavigator()
const UpdateNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyLists"
      component={gestureHandlerRootHOC(MyListingsScreen)}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Update"
      component={gestureHandlerRootHOC(ListingUpdateScreen)}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default UpdateNavigator
