import React from 'react'
import protoTypes from 'prop-types'
import {
  Platform,
  SectionList,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

import Moment from 'moment';
import { goToSession } from '../../navigation/navigationHelpers'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/styles'
import { styles } from './styles'

const Schedule = ({ list }) => {

  const renderItem = ({item}) => (
    <View style={styles.card} key={item.session_id}>
      <Text style={styles.cardTitle} key="t" onPress={() => goToSession('schedule', item)}>{item.title}</Text>
      <Text style={styles.cardLocal} key="l" onPress={() => goToSession('schedule', item)}>{item.location}</Text>
      { item.fav &&
        <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.red} />
      }
    </View>
  )
  const renderHeader = (headerItem) => (
    <Text style={styles.time}>{Moment.unix(headerItem.section.title).format('h:mm A')}</Text>
  )

  return (
    <SectionList
      keyExtractor={(item) => (item.session_id)}
      renderItem={renderItem}
      renderSectionHeader={renderHeader}
      ItemSeparatorComponent={() =>
        <View style={styles.separator} />
      }
      sections={list}
    /> 
  )
}

export default Schedule