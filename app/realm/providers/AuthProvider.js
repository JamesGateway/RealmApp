import React, { useContext, useState, useEffect, useRef } from 'react'
import Realm from 'realm'
import { getRealmApp } from '../getRealmApp'

const app = getRealmApp()
const AuthContext = React.createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(app.currentUser)
  const [userInfo, setUserInfo] = useState({})
  const realmRef = useRef(null)

  const getMe = async () => {
    const info = await user.functions.getMe()
    setUserInfo(info)
  }

  useEffect(() => {
    if (!user) {
      return
    }
    getMe()
    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`
      }
    }
    Realm.open(config).then((userRealm) => {
      realmRef.current = userRealm
    })
    return () => {
      const userRealm = realmRef.current
      if (userRealm) {
        userRealm.close()
        realmRef.current = null
      }
    }
  }, [user])

  const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password)
    const newUser = await app.logIn(creds)
    setUser(newUser)
  }

  const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser(email, password)
  }

  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!")
      return
    }
    user.logOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        userInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const auth = useContext(AuthContext)
  if (auth == null) {
    throw new Error('useAuth() called outside of a AuthProvider?')
  }
  return auth
}

export { AuthProvider, useAuth }
