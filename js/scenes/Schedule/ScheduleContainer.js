import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { scheduleFetch } from '../../redux/modules/schedule'
import LoadIcon from '../../components/LoadIcon'
import Schedule from '../../components/Schedule'

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
      return <LoadIcon />
    } else {
      return (
        <Schedule
          list={this.props.data}
          routeFrom="schedule"
        />)
    }
  }

}

ScheduleContainer.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.schedule.data,
    isLoading: state.schedule.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer)