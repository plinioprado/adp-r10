import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Speaker from './Speaker'

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      visible: false   
    }
  }

  goBack = () => {
    console.log('back')
    this.props.navigator.pop()
  }

  render() {
    return <Speaker
      speakerData={this.props.speakerData}
      goBack={() => this.goBack()}
      />
  }
}

SpeakerContainer.propTypes = {
  speakerData: PropTypes.object,
  navigator: PropTypes.object
}

export default SpeakerContainer