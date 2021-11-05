import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import defaultStyles from '../config/styles'

function AppButton({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: defaultStyles.colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 15,
    width: '100%'
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})

export default AppButton
