import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './app/realm/providers/AuthProvider'
import { TextsProvider } from './app/realm/providers/TextProvider'
import navigationTheme from './app/navigation/navigationTheme'
import AuthNavigator from './app/navigation/AuthNavigator'

export default function App() {
  return (
    <AuthProvider>
      <TextsProvider>
        <NavigationContainer theme={navigationTheme}>
          <AuthNavigator />
        </NavigationContainer>
      </TextsProvider>
    </AuthProvider>
  )
}
