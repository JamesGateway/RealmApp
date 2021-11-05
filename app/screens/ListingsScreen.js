import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { useTexts } from '../realm/providers/TextProvider'
import Card from '../components/Card'
import Screen from '../components/Screen'
import defaultStyles from '../config/styles'

export default function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)
  const { texts } = useTexts()

  useEffect(async () => {
    setRefreshing(true)
    setRefreshing(false)
  }, [texts])

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={texts}
        keyExtractor={(texting) => texting._id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            http={item.http}
            message={item.message}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        )}
        refreshing={refreshing}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: defaultStyles.colors.light
  }
})
