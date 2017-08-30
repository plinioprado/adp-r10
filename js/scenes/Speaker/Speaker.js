import React from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'

import { colors } from '../../config/styles'
import { styles } from './styles'

const Speaker = ({ speakerData, goBack }) => (
    
    <ScrollView style={styles.speaker} stickyHeaderIndices={[0]} >
      <View style={styles.header}>
      <TouchableOpacity  onPress={() => goBack()} >
          <Icon name="ios-close" style={styles.icon} size={40} color={'white'} />
          <View style={styles.title}><Text style={styles.titleText}>About the Speaker</Text></View>
        </TouchableOpacity>
      </View>
      <View style={styles.card} >
        <Image style={styles.photo} source={{uri: speakerData.image}} />
        <Text style={styles.name} >{speakerData.name}</Text>
        <Text style={styles.bio} >{speakerData.bio}</Text>
        <TouchableHighlight
        onPress={() => Linking.openURL(speakerData.url).catch(err => ('Error: ', err))}
      >
        <LinearGradient 
          start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
          colors={[colors.purple, colors.blue]}
          style={styles.button}
        >
          <Text style={styles.buttonInner}>Read More on Wikipedia</Text>
        </LinearGradient>
      </TouchableHighlight>
      </View>
    </ScrollView>
  
)

Speaker.propTypes = {
  speakerData: PropTypes.object,
  goBack: PropTypes.func
}

export default Speaker