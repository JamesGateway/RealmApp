import React, { useContext, useState, useEffect, useRef } from 'react'
import Realm from 'realm'
import { Text } from '../schemas'
import { useAuth } from './AuthProvider'

const TextsContext = React.createContext(null)

const TextsProvider = ({ children }) => {
  const [texts, setTexts] = useState([])
  const { user } = useAuth()
  const realmRef = useRef(null)

  useEffect(() => {
    if (!user) {
      return
    }
    const OpenRealmBehaviorConfiguration = {
      type: 'openImmediately'
    }
    const config = {
      schema: [Text.schema],
      sync: {
        user: user,
        partitionValue: 'meo',
        newRealmFileBehavior: OpenRealmBehaviorConfiguration,
        existingRealmFileBehavior: OpenRealmBehaviorConfiguration
      }
    }
    Realm.open(config).then((projectRealm) => {
      realmRef.current = projectRealm
      const syncTexts = projectRealm.objects('Text')
      setTexts([...syncTexts])
      syncTexts.addListener(() => {
        setTexts([...syncTexts])
      })
    })

    return () => {
      const projectRealm = realmRef.current
      if (projectRealm) {
        projectRealm.close()
        realmRef.current = null
        setTexts([])
      }
    }
  }, [user])

  const createText = (text) => {
    const projectRealm = realmRef.current
    projectRealm.write(() => {
      projectRealm.create(
        'Text',
        new Text({
          title: text.title,
          http: text.http,
          message: text.message,
          email: text.email,
          partition: 'meo'
        })
      )
    })
  }

  const deleteText = (text) => {
    const projectRealm = realmRef.current
    projectRealm.write(() => {
      projectRealm.delete(text)
      setTexts([...projectRealm.objects('Text')])
    })
  }

  return (
    <TextsContext.Provider
      value={{
        createText,
        deleteText,
        texts
      }}
    >
      {children}
    </TextsContext.Provider>
  )
}

const useTexts = () => {
  const text = useContext(TextsContext)
  if (text == null) {
    throw new Error('useTexts() called outside of a TextsProvider?')
  }
  return text
}

export { TextsProvider, useTexts }
