import { Platform } from 'react-native'

export default {
  colors: {
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    black: '#000',
    white: '#fff',
    medium: '#6e6969',
    light: '#EAE8E8',
    dark: '#0c0c0c',
    danger: '#ff5252',
    fix: '#52FF7C',
    blue: '#4d94ff'
  },
  text: {
    color: '#0c0c0c',
    fontSize: 18,
    width: '100%',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial'
  }
}
