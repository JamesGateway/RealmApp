import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import QrContext from '../context/Qrcontext'
import ListNavigator from './ListNavigator'
import AccountNavigator from './AccountNavigator'
import PostNavigator from './PostNavigator'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  const [qr, setQr] = useState('')

  return (
    <QrContext.Provider value={{ qr, setQr }}>
      <Tab.Navigator>
        <Tab.Screen
          name="All Post"
          component={ListNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Post Screen"
          component={PostNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </QrContext.Provider>
  )
}
