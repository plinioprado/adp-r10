import React from 'react'
import protoTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

const SessionCard = ({ session }) => (
  <View style={styles.card} key={session.item.id}>
    <Text style={styles.cardTitle} >{session.item.title}</Text>
    <Text style={styles.cardLocal} >{session.item.location}</Text>
    <Icon name="ios-heart" size={24} />
  </View>
)

export default SessionCard