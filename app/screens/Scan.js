/* eslint-disable react-native/no-raw-text */
import React, { useState, useRef, useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

import QrContext from '../context/Qrcontext'

export default function ScanScreen({ navigation }) {
  const qrContext = useContext(QrContext)
  const scanner = useRef(null)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('')

  const handleScanned = (e) => {
    setScanned(true)
    setText(e.data)
  }

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={scanned ? undefined : handleScanned}
        ref={scanner}
        cameraStyle={styles.camera}
      />
      <View style={styles.cover}>
        {scanned && (
          <>
            <Text
              style={{
                marginVertical: 30,
                fontSize: 30,
                backgroundColor: 'white',
                borderRadius: 5
              }}
            >
              {text}
            </Text>
            <View style={styles.buttoncover}>
              <View>
                <Button
                  title={'Tap to Scan Again'}
                  onPress={() => (scanner.current.reactivate(), setScanned(false))}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title={'Add to QR Code'}
                  onPress={() => {
                    qrContext.setQr(text)
                    navigation.navigate('Post')
                  }}
                />
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  camera: {
    height: '100%'
  },
  cover: {
    flex: 0.2,
    width: '80%',
    paddingBottom: 50
  },
  buttoncover: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: { width: '45%' }
})
