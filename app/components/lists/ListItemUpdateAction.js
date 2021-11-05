import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import defaultStyles from '../../config/styles'

function ListItemUpdateAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="lead-pencil" size={35} color={defaultStyles.colors.white} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.fix,
    borderRadius: 35,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 70
  }
})

export default ListItemUpdateAction
