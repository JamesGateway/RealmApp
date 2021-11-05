import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, Alert } from 'react-native'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '../realm/providers/AuthProvider'
import { useTexts } from '../realm/providers/TextProvider'
import QrContext from '../context/Qrcontext'
import Screen from '../components/Screen'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

const validationSchema = Yup.object().shape({
  title: Yup.string().max(50).required().min(1).label('title'),
  http: Yup.string().max(255).label('tttp'),
  message: Yup.string().max(255).label('message')
})

function ListingEditScreen({ navigation }) {
  const { qr, setQr } = useContext(QrContext)
  const { createText } = useTexts()
  const { userInfo } = useAuth()

  const QRform = () => {
    const { qr, setQr } = useContext(QrContext)
    const { setFieldValue } = useFormikContext()
    useEffect(() => {
      setFieldValue('http', qr)
    }, [qr])
    return null
  }

  const handleSubmit = async (text, { resetForm }) => {
    try {
      createText(text)
      resetForm()
      setQr('')
    } catch {
      ;(err) => Alert('Err:', err)
    }
  }

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          http: `${qr}`,
          message: '',
          email: userInfo.name
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, handleBlur, errors, touched, values }) => (
          <>
            <QRform />
            <TextInput
              maxLength={255}
              placeholder="Title"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            {errors.title && touched.title ? (
              <Text style={styles.errors}>{errors.title}</Text>
            ) : null}
            <TextInput
              maxLength={255}
              placeholder="QR Code"
              onChangeText={handleChange('http')}
              onBlur={handleBlur('http')}
              value={values.http}
            />
            {errors.http && touched.http ? <Text style={styles.errors}>{errors.http}</Text> : null}
            <TextInput
              maxLength={255}
              placeholder="Message"
              numberOfLines={3}
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              value={values.message}
            />
            {errors.message && touched.message ? (
              <Text style={styles.errors}>{errors.message}</Text>
            ) : null}
            <Button title="Post" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        title="Scan QR Code"
        color="blue"
        onPress={() => {
          setQr('')
          navigation.navigate('ScanQR')
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  errors: {
    color: 'red'
  }
})
export default ListingEditScreen
