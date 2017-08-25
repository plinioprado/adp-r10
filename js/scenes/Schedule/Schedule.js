import React from 'react'
import protoTypes from 'prop-types'
import {
  Platform,
  SectionList,
  View,
  Text
} from 'react-native'

import { goToSession } from '../../navigation/navigationHelpers'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/styles'
import { styles } from './styles'

const Schedule = ({ schedule }) => (
  <View style={styles.card} key={schedule.item.session_id}>
    <Text style={styles.cardTitle} key="t" onPress={() => goToSession('schedule', schedule.item)}>{schedule.item.title}</Text>
    <Text style={styles.cardLocal} key="l" onPress={() => goToSession('schedule', schedule.item)}>{schedule.item.location}</Text>
    { schedule.item.fav &&
      <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.Red} />
    }
  </View>
)

export default Schedule