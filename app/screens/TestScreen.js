import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { useAuth } from '../realm/providers/AuthProvider'

export default function TestScreen() {
  const { user } = useAuth()
  const [userInfo, setUserInfo] = useState({})

  const getMe = async () => {
    try {
      const info = await user.functions.getMe()
      setUserInfo(info)
    } catch (err) {
      user == null ? null : Alert.alert('Error:', err)
    }
  }

  useEffect(() => {
    getMe()
  }, [user])

  return (
    <View style={styles.text}>
      <Text>Test Test</Text>
      <Text>{userInfo.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    alignContent: 'center',
    alignItems: 'center'
  }
})
