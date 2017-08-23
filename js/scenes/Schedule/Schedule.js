import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'
import { styles } from './styles'

const Schedule = ({ data }) => (
  <View style={styles.schedule}>
    <Text>{JSON.stringify(data)}</Text>
  </View>
)

export default Schedule
