import React from 'react'
import protoTypes from 'prop-types'
import {
  Platform,
  View,
  Text
} from 'react-native'

import { goToSession } from '../../navigation/navigationHelpers'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/styles'
import { styles } from './styles'

const Schedule = ({ session }) => (
  <View style={styles.card} key={session.item.session_id}>
    <Text style={styles.cardTitle} key="t" onPress={() => goToSession('schedule', session.item)}>{session.item.title}</Text>
    <Text style={styles.cardLocal} key="l" onPress={() => goToSession('schedule', session.item)}>{session.item.location}</Text>
      <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.Red} />
  </View>
)

export default Schedule