import React, { Component } from 'react'
import PropTypes from 'prop-types'
import About from './About'

class AboutContainer extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      loading: true
    }
  }

  static route = {
    navigationBar: {
      title: 'about'
    }
  }

  static propTypes = {

  }

  render() {
    return <About/>
  }
}

export default AboutContainer