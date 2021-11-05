import React from 'react'
import { StyleSheet, View } from 'react-native'

import defaultStyles from '../../config/styles'

function ListItemSeparator() {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: defaultStyles.colors.light,
    height: 5,
    width: '100%'
  }
})

export default ListItemSeparator
