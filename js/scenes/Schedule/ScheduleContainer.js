import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { 
  ActivityIndicator,
  View
 } from 'react-native'
import { sessionFetch } from '../../redux/modules/session'

import SessionCard from '../../components/SessionCard'
import Schedule from './Schedule'

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(sessionFetch())
  }

  static route = {
    navigationBar: {
      title: 'Schedule'
    }
  }

  render() {
    return (
      <View>
        {
          this.props.data.map((item) => (<SessionCard session={{item}} />))
        }
      </View>
    )
  }
  // render() {
  //   return (
  //     this.props.data.map((item) => (<SessionCard session={{ description: 'test'}} />)) 
  //   )
  // }
}

function mapStateToProps(state) {
  return {
    data: state.session.data,
    isLoading: state.session.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer)