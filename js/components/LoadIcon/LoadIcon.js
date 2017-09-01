import React from 'react'
import {
  ActivityIndicator,
  View
} from 'react-native'
import { styles } from './styles'

const LoadIcon = () => (
  <View style={styles.loadIcon}>
    <ActivityIndicator />
  </View>
)

export default LoadIcon