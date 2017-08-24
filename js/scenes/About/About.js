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

const About = ({ data, shownId, handleShowHide }) => (
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
      {
        data.map((item, i) => (
          <View key={i}>
            <Text style={styles.codeTitle} onPress={() => handleShowHide(i)}>
              { (i === shownId) ? '-' : '+' } {item.title}
            </Text>
            {
              (i === shownId) && 
                <Text style={styles.codeDescr}>
                  {item.description}
                </Text>
            }
          </View>
          ))
      }
    </ScrollView>
  </View>
)

About.propTypes = {

}

export default About