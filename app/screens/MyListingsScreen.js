import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import {
  ListItem,
  ListItemDeleteAction,
  ListItemUpdateAction,
  ListItemSeparator
} from '../components/lists'
import { useTexts } from '../realm/providers/TextProvider'

import defaultStyles from '../config/styles'

function MyListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false)
  const { texts, deleteText } = useTexts()

  useEffect(async () => {
    setRefreshing(true)
    setRefreshing(false)
  }, [texts])

  const handleDelete = async (item) => {
    deleteText(item)
  }

  return (
    <Screen style={styles.contianer}>
      {texts && (
        <FlatList
          data={texts}
          keyExtractor={(text) => text._id}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.message}
              renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
        />
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: defaultStyles.colors.light
  }
})

export default MyListingsScreen
