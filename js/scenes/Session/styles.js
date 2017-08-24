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

  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})