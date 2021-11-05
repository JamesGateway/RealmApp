/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { Image, StyleSheet, StatusBar, SafeAreaView, Text, Alert } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '../realm/providers/AuthProvider'

import TextInput from '../components/TextInput'
import Button from '../components/Button'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().min(6).email().label('Email'),
  password: Yup.string().required().min(6).matches().label('Password')
})

export default function LoginScreen() {
  const { signIn } = useAuth()

  const handleSubmit = async (user) => {
    console.log('Press sign in')
    try {
      await signIn(user.email, user.password)
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, handleBlur, errors, touched, values }) => (
          <>
            <TextInput
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <Text style={styles.errors}>{errors.email}</Text>
            ) : null}
            <TextInput
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <Text style={styles.errors}>{errors.password}</Text>
            ) : null}
            <Button title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  errors: {
    color: 'red'
  },
  logo: {
    alignSelf: 'center',
    borderRadius: 40,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80
  }
})
