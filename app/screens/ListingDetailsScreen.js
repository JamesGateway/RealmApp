import React from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '../components/Text'
import Screen from '../components/Screen'
import defaultStyles from '../config/styles'
import ListItem from '../components/lists/ListItem'

export default function ListingDetailsScreen({ navigator, route }) {
  const texting = route.params
  return (
    <Screen>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{JSON.stringify(texting.title)}</Text>
        <Text style={styles.http}>Http: {JSON.stringify(texting.http)}</Text>
        <Text style={styles.message}>Message: {JSON.stringify(texting.message)}</Text>
        <Text style={styles.date}>Date: {JSON.stringify(texting.date)}</Text>
        <View style={styles.userContainer}>
          <Text style={styles.email}>Author:</Text>
          <ListItem title={JSON.stringify(texting.email)} />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  author: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  date: {
    color: defaultStyles.colors.medium,
    fontSize: 10,
    marginVertical: 15
  },
  detailsContainer: {
    padding: 20
  },
  http: {
    fontSize: 20,
    marginTop: 10
  },
  message: {
    marginTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  userContainer: {
    marginVertical: 35
  }
})
