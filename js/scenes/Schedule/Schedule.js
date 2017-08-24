import React from 'react'
import protoTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

import { goToSession } from '../../navigation/navigationHelpers'

import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from './styles'

const Schedule = ({ session }) => (
  <View style={styles.card} key={session.item.session_id}>
    <Text style={styles.cardTitle} key="t" onPress={() => goToSession('schedule', session.item)}>{session.item.title}</Text>
    <Text style={styles.cardLocal} key="l" onPress={() => goToSession('schedule', session.item)}>{session.item.location}</Text>
    <Icon name="ios-heart" size={20} />
  </View>
)

export default Schedule