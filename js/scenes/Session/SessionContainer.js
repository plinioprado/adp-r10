import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import { sessionFetch } from '../../redux/modules/session'
import { toggleFav } from '../../redux/modules/schedule'

import Session from './Session'

class SessionContainer extends Component {

  componentDidMount() {
    this.props.dispatch(sessionFetch(this.props.sessionData.speaker))
  }

  static route = {
    navigationBar: {
      title: 'Session'
    }
  }

  handleToggle(id) {
    toggleFav(id)
    this.props.dispatch(sessionFetch(this.props.sessionData.speaker))
  }

  render() {
    if (this.props.isLoading) {
      return <ActivityIndicator />
    } else {
      return <Session
        sessionData={this.props.sessionData}
        speakerData={this.props.speakerData}
        handleToggle={(id) => this.handleToggle(id)}
        />
    }
  }
}

const mapStateToProps = (state) => ({
  speakerData: state.session.data,
  loading: state.session.loading
});

SessionContainer.propTypes = {
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func,
  sessionData: PropTypes.PropTypes.object,
  speakerData: PropTypes.PropTypes.object
}

export default connect(mapStateToProps)(SessionContainer);