import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { 
  ActivityIndicator,
  View
 } from 'react-native'
import { sessionFetch } from '../../redux/modules/session'

import { NavigationActions } from '@expo/ex-navigation'
import Router from '../../navigation/routes'
import Store from  '../../redux/store'

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

  // goToSession(data) {
  //   let navigatorUID = Store.getState().navigation.currentNavigatorUID;
  //   Store.dispatch(NavigationActions.push(
  //     navigatorUID,
  //     Router.getRoute('session'), data))
  // }

  render() {
    return (
      <View>
        {
          this.props.data.map((item) => (<Schedule
            session={{item}}
            />))
        }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.session.data,
    isLoading: state.session.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer)