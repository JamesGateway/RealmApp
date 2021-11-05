import React from 'react'
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native'

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 10
  },
  view: {
    flex: 1
  }
})

export default Screen
