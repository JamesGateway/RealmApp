import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { useAuth } from '../realm/providers/AuthProvider'

import Icon from '../components/Icon'
import ListItem from '../components/lists/ListItem'
import Screen from '../components/Screen'
import defaultStyles from '../config/styles'

export default function AccountScreen({ navigation }) {
  const { signOut, userInfo } = useAuth()

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {userInfo == null ? null : <ListItem title={userInfo.name} />}
      </View>
      <View style={styles.container}>
        <ListItem
          title={'My Listings'}
          IconComponent={
            <Icon name={'format-list-bulleted'} backgroundColor={defaultStyles.colors.primary} />
          }
          onPress={() => navigation.navigate('My Listings')}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
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
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: defaultStyles.colors.light
  }
})
