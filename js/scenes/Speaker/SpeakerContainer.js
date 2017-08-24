import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import Speaker from './Speaker'

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Speaker'
    }
  }

  render() {
    return <Speaker
      speakerData={this.props.speakerData}
      />
  }
}

export default SpeakerContainer