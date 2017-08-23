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
    if ( this.props.isLoading ) {
      return <ActivityIndicator animating={true} size="small" color="black" />
    } else {
      return <About />
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.aboutData.data,
    isLoading: state.aboutData.isLoading
  }
}

export default connect(mapStateToProps)(AboutContainer)