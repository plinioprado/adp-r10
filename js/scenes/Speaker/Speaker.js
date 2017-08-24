import React from 'react'
import protoTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native';
import { styles } from './styles'

const Speaker = ({ speakerData }) => (
  <View style={styles.about}>
    <Text>{JSON.stringify(speakerData)}</Text>
  </View> 
)

export default Speaker