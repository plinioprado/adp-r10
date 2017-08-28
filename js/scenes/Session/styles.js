import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'
import {} from '../../lib/dataFormatHelpers'

export const styles = StyleSheet.create({
  session: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  local: {
    color: colors.mediumGrey,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    width: '100%',
    marginBottom: 12
  },
  time: {
    width: '100%',
    color: colors.red,
    marginBottom: 12
  },
  descr: {
    width: '100%',
    marginBottom: 12
  },
  presented: {
    width: '100%',
    color: colors.mediumGrey,
    marginBottom: 12
  },
  session2: {
    paddingLeft: 15,
    paddingRight: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  speaker: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25
  },
  faves: {
    width: '100%',
    padding: 15,
    marginTop: 20,
    borderTopColor: colors.mediumGrey,
    borderTopWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.purple,
    padding: 10,
    width: '100%',
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})