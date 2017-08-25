import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export const styles = StyleSheet.create({
  speaker: {
    backgroundColor: 'black',
    padding: 12,
    height: '100%'
  },
  card: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderRadius: 6
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  name: {
    fontSize: 22,
    marginBottom: 15
  },
  bio: {
    lineHeight: 22
  },
  wiki: {
    backgroundColor: '#841584',
    color: 'white'
  }
})