import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  http: Yup.string().max(255).label('Http'),
  message: Yup.string().label('Message')
})

function ListingUpdateScreen({ route, navigation }) {
  const text = route.params

  const handleSubmit = async (text) => {
    console.log(text)
    navigation.goBack('My Listings')
  }

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          http: '',
          message: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, handleBlur, errors, touched, values }) => (
          <>
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
              placeholder="Http"
              onChangeText={handleChange('Http')}
              onBlur={handleBlur('Http')}
              value={values.Http}
            />
            {errors.Http && touched.Http ? <Text style={styles.errors}>{errors.Http}</Text> : null}
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
            <Button title="Update" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  update: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export default ListingUpdateScreen
