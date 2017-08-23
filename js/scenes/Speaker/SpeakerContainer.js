import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Speaker from './Speaker'

class SpeakerContainer extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      loading: true
    }
  }

  static route = {
    navigationBar: {
      title: 'Speaker'
    }
  }

  render() {
    return <Speaker/>
  }
}

export default SpeakerContainer