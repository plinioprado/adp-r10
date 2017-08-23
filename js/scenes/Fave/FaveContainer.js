import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Fave from './Fave'

class FaveContainer extends Component {

  static route = {
    navigationBar: {
      title: 'about'
    }
  }

  render() {
    return <Fave />
  }
}

export default FaveContainer