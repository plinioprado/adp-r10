
import React, { Component } from 'react'
import PropTypes from 'prop-types'


import {
  Animated,
  View,
  Text,
  Image,
  LayoutAnimation,
  ScrollView,
  TouchableOpacity,
  Platform,
  UIManager,
} from 'react-native';
import { styles } from './styles'
import logoImage from '../../assets/images/r10_logo.png'
class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shownId: null,
      spin: new Animated.Value(0),
    }

    // if (Platform.OS === 'android') {
    //   UIManager.setLayoutAnimationEnabledExperimental 
    //   && UIManager.setLayoutAnimationEnabledExperimental(true)
    // }
  }

  spinPlus = () => {
    Animated.timing(
        this.state.spin,
        {
            toValue: 1,
            duration: 1500
        }
    ).start();
  }

  handleShowHide(id) {
    LayoutAnimation.easeInEaseOut()
    this.spinPlus()
    if (id === this.state.shownId) id = null
    this.setState({shownId: id})
  }

  render() {

    let spinningPlus = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })

    let animatedStyle = {
      transform: [
        { rotate: spinningPlus }
      ]
    }

    return (
      <View style={styles.about}>
        <ScrollView>
          <View style={styles.aboutHead}>
            <Image source={logoImage} style={styles.aboutImmage}/>
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
            this.props.data.map((item, i) => (
              <View key={i}>
                <TouchableOpacity onPress={() => this.handleShowHide(i)}>
                  <Text style={styles.codeTitle}>
                  <Animated.Text style={[animatedStyle, styles.plusMinus]}>
                    { (i === this.state.shownId) ? '-' : '+' }
                  </Animated.Text>
                  {item.title}
                  </Text>
                  {
                    (i === this.state.shownId) && 
                      <Text style={styles.codeDescr}>
                        {item.description}
                      </Text>
                  }
                </TouchableOpacity>
              </View>
              ))
          }
        </ScrollView>
      </View>
    )
  }

}

About.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any)
}

export default About