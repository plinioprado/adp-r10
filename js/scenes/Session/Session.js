import React from 'react'
import protoTypes from 'prop-types'
import {
  View,
  Text,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/styles'
import { styles } from './styles'
import Moment from 'moment';

const Session = ({ session }) => (
  <View style={styles.session}>
    <Text style={styles.local}>{session.location}</Text>
    <Icon name="ios-heart" size={20} color={colors.Red} />
    <Text style={styles.title}>{session.title}</Text>
    <Text style={styles.time}>{Moment.unix(session.start_time).format('h:mm A')}</Text>
    <Text style={styles.descr}>{session.description}</Text>
    <Text style={styles.presented}>Presented by:</Text>
    <Text style={styles.speaker}>{session.speaker}</Text>
    <Text style={styles.photo}>{session.speaker}</Text>
  </View>
)
export default Session