import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'

import Text from './Text'
import defaultStyles from '../config/styles'

export default function Card({ title, http, message, date, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {http && <Text style={styles.http}>{http}</Text>}
          {message && <Text style={styles.message}>{message}</Text>}
          {date && <Text style={styles.date}>Date: {date}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  message: {
    marginVertical: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8
  }
})
