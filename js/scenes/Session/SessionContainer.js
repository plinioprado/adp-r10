import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { 
  ActivityIndicator,
  View
 } from 'react-native'
import { sessionFetch } from '../../redux/modules/session'

import { NavigationActions } from '@expo/ex-navigation'
import Router from '../../navigation/routes'
import Store from  '../../redux/store'

import Session from './Session'

class SessionContainer extends Component {

  componentDidMount() {
    this.props.dispatch(sessionFetch(this.props.sessionData.speaker));
  }

  static route = {
    navigationBar: {
      title: 'Session'
    }
  }

  render() {
    return <Session
      sessionData={this.props.sessionData}
      speakerData={this.props.speakerData}
      />
  }
}

const mapStateToProps = (state) => ({
  speakerData: state.session.data,
  loading: state.session.loading
});

export default connect(mapStateToProps)(SessionContainer);