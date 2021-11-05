import * as React from 'react'
import { Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../realm/providers/AuthProvider'

export function Logout() {
  const navigation = useNavigation()
  const { signOut } = useAuth()

  return (
    <Button
      title="Log Out"
      onPress={() => {
        Alert.alert('Log Out', null, [
          {
            text: 'Yes, Log Out',
            style: 'destructive',
            onPress: () => {
              signOut()
              console.log('Press Logout')
              navigation.navigate('Welcome')
            }
          },
          { text: 'Cancel', style: 'cancel' }
        ])
      }}
    />
  )
}
