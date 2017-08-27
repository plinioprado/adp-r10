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

const Schedule = ({ list }) => (
  <View>
    {
      list.map(item => (
        <View style={styles.card} key={item.session_id}>
          <Text style={styles.cardTitle} key="t" onPress={() => goToSession('schedule', item)}>{item.title}</Text>
          <Text style={styles.cardLocal} key="l" onPress={() => goToSession('schedule', item)}>{item.location}</Text>
          { item.fav &&
            <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.Red} />
          }
        </View>        
      ))
    }
  </View>
  )

export default Schedule