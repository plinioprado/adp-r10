import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export const styles = StyleSheet.create({
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
  }
})