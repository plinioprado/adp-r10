import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { 
  ActivityIndicator,
  View
 } from 'react-native'
import { sessionFetch } from '../../redux/modules/session'

import { toggleFav, scheduleFetch } from '../../redux/modules/schedule'
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

  handleToggle(id) {
    toggleFav(id)
    this.render()
  }

  render() {
    if (this.props.isLoading) {
      return <ActivityIndicator />
    } else {
      return <Session
        sessionData={this.props.sessionData}
        speakerData={this.props.speakerData}
        toggleFav={(id) => this.handleToggle(id)}
        />
    }
  }
}

const mapStateToProps = (state) => ({
  speakerData: state.session.data,
  loading: state.session.loading
});

export default connect(mapStateToProps)(SessionContainer);