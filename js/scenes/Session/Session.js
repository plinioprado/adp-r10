import React from 'react'
import protoTypes from 'prop-types'
import {
  Button,
  Image,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { goToSpeaker } from '../../navigation/navigationHelpers'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/styles'
import { styles } from './styles'
import Moment from 'moment';

const Session = ({ sessionData, speakerData, toggleFav }) => (
  <View style={styles.session}>
    <Text style={styles.local}>{sessionData.location}</Text>
    { sessionData.fav &&
      <Icon name="ios-heart" size={20} color={colors.Red} />
    }
    <Text style={styles.title}>{sessionData.title}</Text>
    <Text style={styles.time}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
    <Text style={styles.descr}>{sessionData.description}</Text>
    <Text style={styles.presented}>Presented by:</Text>
    <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
      <View style={styles.speaker}>
        <Image style={styles.photo} source={{uri: speakerData.image}} />
        <Text>{speakerData.name}</Text>
      </View>
    </TouchableHighlight>
    <Text style={styles.separator}></Text>
    <View style={styles.faves}>
      <Button
        style={styles.button}
        onPress={() => toggleFav(sessionData.session_id)}
        title={sessionData.fav ? 'Remove From Favorites' : 'Add to Favorites'}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  </View>
  )

export default Session