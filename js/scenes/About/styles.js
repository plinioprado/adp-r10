import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export const styles = StyleSheet.create({
  about: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
  },
  aboutHead: {
   height: 90,
   justifyContent: 'center',
   alignItems: 'center',
   borderBottomWidth: 1,
   marginBottom: 20,
  },
  aboutImmage: {
    height: 45,
    width: 180,
  },
  aboutHeader: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 20,
    alignItems: 'center',
  },
  codeTitle: {
    color: colors.purple,
    marginTop: 10,
    fontWeight: 'bold'
  },
  plusMinus: {
    color: colors.purple,
  }
})