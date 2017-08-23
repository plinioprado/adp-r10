import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppMap from './AppMap'

class AppMapContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Map'
    }
  }

  static propTypes = {

  }

  render() {
    return <AppMap/>
  }
}

export default AppMapContainer