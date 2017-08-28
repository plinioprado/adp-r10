import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {
  ActivityIndicator,
  LayoutAnimation
} from 'react-native'
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

  animationConfig = {
    duration: 1000,
    update: {
      typs: 'spring',
      springDampen: 0.2
    }
  }

  handleShowHide(id) {
    LayoutAnimation.configureNext(this.animationConfig)
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

AboutContainer.propTypes = {
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any)
}

function mapStateToProps(state) {
  return {
    data: state.about.data,
    isLoading: state.about.isLoading
  }
}

export default connect(mapStateToProps)(AboutContainer)