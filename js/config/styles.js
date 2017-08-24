import { Platform } from 'react-native'
/*
Global styles
*/

export const colors = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  Red: '#cf392a'
}

export const typography = {
  fontSize: 16,
  fontMain: 'Montserrat' ,
  fontMainLight: 'Montserrat-Light',
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-Regular',
      color: colors.blue
    },
  }),
}