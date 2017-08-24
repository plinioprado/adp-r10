import { StyleSheet } from 'react-native'
import { colors} from '../config/styles'

export const styles = StyleSheet.create({
  header: {
    height: 20
  },
  selectedItemStyle: {
    backgroundColor: colors.lightGrey
  },
  titleText: {
    fontWeight: 'bold'
  },
  selectedTitleText: {
    color: 'white'
  }
})