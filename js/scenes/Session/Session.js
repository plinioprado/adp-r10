import React from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { goToSpeaker } from '../../navigation/navigationHelpers'

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/styles'
import { styles } from './styles'
import Moment from 'moment';

const Session = ({ sessionData, speakerData, handleToggle }) => (
  <View style={styles.session}>
    <Text style={styles.local}>{sessionData.location}</Text>
    { sessionData.fav &&
      <Icon name="ios-heart" size={20} color={colors.red} />
    }
    <Text style={styles.title}>{sessionData.title}</Text>
    <Text style={styles.time}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
    <Text style={styles.descr}>{sessionData.description}</Text>
    <Text style={styles.presented}>Presented by:</Text>
    <TouchableOpacity onPress={() => goToSpeaker(speakerData)}>
      <View style={styles.speaker}>
        <Image style={styles.photo} source={{uri: speakerData.image}} />
        <Text>{speakerData.name}</Text>
      </View>
    </TouchableOpacity>
    <Text style={styles.separator}></Text>
    <View style={styles.faves}>
      <TouchableHighlight
        onPress={() => handleToggle(sessionData)}
      >
        <LinearGradient 
          start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
          colors={[colors.purple, colors.blue]}
          style={styles.button}
        >
          <Text style={styles.buttonInner}>{sessionData.fav ? 'Remove From Favorites' : 'Add to Favorites'}</Text>
        </LinearGradient>
      </TouchableHighlight>
    </View>
  </View>
)

Session.propTypes = {
  toggleFav: PropTypes.func,
  sessionData: PropTypes.object,
  speakerData: PropTypes.object
}

export default Session