import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Session from './Session'

class SessionContainer extends Component {

  static propTypes = {

  }

  static route = {
    navigationBar: {
      title: 'Session'
    }
  }

  render() {
    return <Session
      session={this.props.sessionData}
      />
  }
}

export default SessionContainer