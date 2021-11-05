import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import Text from '../Text'
import defaultStyles from '../../config/styles'

function ListItem({ title, subTitle, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.white,
    flexDirection: 'row',
    padding: 15
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },
  subTitle: {
    color: defaultStyles.colors.medium
  },
  title: {
    fontWeight: '500'
  }
})

export default ListItem
