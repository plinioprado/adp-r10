import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Speaker from './Speaker'

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About the Speaker',
      tintColor: 'white',
      backgroundColor: 'black'   
    }
  }

  render() {
    return <Speaker
      speakerData={this.props.speakerData}
      />
  }
}

SpeakerContainer.propTypes = {
  speakerData: PropTypes.object
}

export default SpeakerContainer