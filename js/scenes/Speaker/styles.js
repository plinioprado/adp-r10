import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  speaker: {
    backgroundColor: 'black',
    padding: 12,
  },
  header: {
    height: 50,
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    marginTop: 10,
    position: 'absolute',
  },
  title: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
  },
  card: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
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
  button: {
    marginTop: 20,
    height: 40,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius:20,
    borderColor: 'white'
  },
  buttonInner: {
    color: 'white'
  }
})