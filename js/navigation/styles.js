import { StyleSheet } from 'react-native'
import { colors} from '../config/styles'

export const styles = StyleSheet.create({
  header: {
    height: 10
  },
  selectedItemStyle: {
    backgroundColor: colors.lightGrey
  },
  titleText: {
    fontSize: 16,
    marginLeft: 8
  },
  selectedTitleText: {
    fontSize: 16,
    color: colors.purple,
    marginLeft: 8
  },
  bgTop: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'stretch',
    height: '100%'
  }
})