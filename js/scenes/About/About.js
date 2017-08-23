import React from 'react'
import protoTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { styles } from './styles'

const About = ({ data }) => (
   <View style={styles.about}>
    <ScrollView>
      <View style={styles.aboutHead}>
        <Image source={require('../../assets/images/r10_logo.png')} style={styles.aboutImmage}/>
      </View>
      <Text>
        R10 is a conference that focuses on just about anny topic related to dev.
      </Text>
      <Text style={styles.aboutHeader}>
        Date & Venue
      </Text>
      <Text>
        The R10 conference will take place on Tuesday, June, 2017 in Vancouver, BC
      </Text>
      <Text style={styles.aboutHeader}>
        Code of Conduct
      </Text>
      <Text>
        + Purpose
      </Text>
      <Text>
        + Open Source Citizenship
      </Text>
      <Text>
        + Expected Behavior
      </Text>
      <Text>
        + Unacceptable Behavior
      </Text>
      <Text>
        + Consequences Of Unacceptable Behavior
      </Text>
      <Text>
        + What To Do If You Withesses Or Are Subject To Unacceptable Behavior
      </Text>
      <Text>
        + Contact Information
      </Text>
      <Text>
        + License And Attribution
      </Text>
      {data.map(item =>
      (
        <Text>
          {JSON.stringify(item)}
        </Text>
      ))}
    </ScrollView>
  </View>
)


About.propTypes = {

}

export default About