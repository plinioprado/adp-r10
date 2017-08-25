import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { 
  ActivityIndicator,
  View
 } from 'react-native'
import { scheduleFetch } from '../../redux/modules/schedule'

import { NavigationActions } from '@expo/ex-navigation'
import Router from '../../navigation/routes'
import Store from  '../../redux/store'

import SessionCard from '../../components/SessionCard'
import Schedule from './Schedule'

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(scheduleFetch())
  }

  static route = {
    navigationBar: {
      title: 'Schedule'
    }
  }

  render() {
    if (this.props.isLoading) {
      return <ActivityIndicator />
    } else {
      return (
        <View>
          {
            this.props.data.map((item, index) => (<Schedule
              schedule={{item}}
              key={index}
              />))
          }
        </View>
      )
    }
    
  }
}

function mapStateToProps(state) {
  return {
    data: state.schedule.data,
    isLoading: state.schedule.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer)