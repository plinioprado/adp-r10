import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export const styles = StyleSheet.create({
  schedule: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
  },
  card: {
    padding: 15,
    borderBottomColor: colors.mediumGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    width: '100%'
  },
  cardLocal: {
    color: colors.mediumGrey
  },
  time: {
    padding: 5,
    backgroundColor: colors.lightGrey
  },
  separator: {
    height: 1,
    backgroundColor: colors.mediumGrey
  }
})