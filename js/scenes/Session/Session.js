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

const Session = ({ sessionData, speakerData }) => (
  <View style={styles.session}>
    <Text style={styles.local}>{sessionData.location}</Text>
    <Icon name="ios-heart" size={20} color={colors.Red} />
    <Text style={styles.title}>{sessionData.title}</Text>
    <Text style={styles.time}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
    <Text style={styles.descr}>{sessionData.description}</Text>
    <Text style={styles.presented}>Presented by:</Text> 
    <Text style={styles.speaker}><Image style={styles.photo} source={{uri: speakerData.image}} /> {speakerData.name}</Text>
  </View>
)
export default Session