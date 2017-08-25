import React from 'react'
import protoTypes from 'prop-types'
import {
  Button,
  Image,
  Linking,
  ScrollView,
  Text,
  View
} from 'react-native';
import { styles, colors } from './styles'

const Speaker = ({ speakerData }) => (
  <ScrollView style={styles.speaker} >
    <View style={styles.card}>
      <Image style={styles.photo} source={{uri: speakerData.image}} />
      <Text style={styles.name} >{speakerData.name}</Text>
      <Text style={styles.bio} >{speakerData.bio}</Text>
      <Button
        onPress={() => Linking.openURL(speakerData.url).catch(err => ('Error: ', err))}
        title="Read More on Wikipedia"
        accessibilityLabel="Read More on Wikipedia"
      />

    </View>
  </ScrollView>
)

export default Speaker