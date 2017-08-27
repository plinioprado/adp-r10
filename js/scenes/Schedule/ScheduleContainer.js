import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { scheduleFetch } from '../../redux/modules/schedule'
import { ActivityIndicator } from 'react-native'
import Schedule from './Schedule'

class ScheduleContainer extends Component {

  componentDidMount(props) {
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
        <Schedule
          list={this.props.data}
        />)
    }
  }

}

ScheduleContainer.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    data: state.schedule.data,
    isLoading: state.schedule.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer)