import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { ActivityIndicator } from 'react-native'
import { aboutFetch } from '../../redux/modules/about'
import About from './About'

class AboutContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {shownId: null };
  }

  componentDidMount() {
    this.props.dispatch(aboutFetch())
  }

  static route = {
    navigationBar: {
      title: 'About'
    }
  }
  
  handleShowHide(id) {
    if (id === this.state.shownId) id = null 
    this.setState({shownId: id});
  }

  render() {
    if ( this.props.isLoading ) {
      return <ActivityIndicator animating={true} size="small" color="black" />
    } else {
      return <About
        data={this.props.data}
        shownId={this.state.shownId}
        handleShowHide={(id) => this.handleShowHide(id)}
      />
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.about.data,
    isLoading: state.about.isLoading
  }
}

export default connect(mapStateToProps)(AboutContainer)