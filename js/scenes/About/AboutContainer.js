import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { ActivityIndicator } from 'react-native'
import { aboutFetch } from '../../redux/modules/about'
import About from './About'

class AboutContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About'
    }
  }

  componentDidMount() {
    this.props.dispatch(aboutFetch())
  }

  render() {
    if ( this.state.aboutData.isLoaded ) {
      return <ActivityIndicator animating={true} size="small" color="black" />
    } else {
      return <About />
    }

  }
}

function mapStateToProps(state) {
  return {
    data: state.aboutData
  };
}

export default connect(mapStateToProps)(AboutContainer)