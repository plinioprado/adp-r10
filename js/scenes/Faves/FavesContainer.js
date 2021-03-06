import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ActivityIndicator} from 'react-native'
import { scheduleFetch } from '../../redux/modules/schedule'
import Schedule from '../../components/Schedule'
import LoadIcon from '../../components/LoadIcon'

class FavesContainer extends Component {

    componentDidMount() {
      this.props.dispatch(scheduleFetch())
    }

    static route = {
      navigationBar: {
        title: 'Faves'
      }
    }

    render() {

      if (this.props.isLoading) {
        return <LoadIcon />
      } else {
        return (
          <Schedule
            list={this.props.data.filter(item => item.data[0].fav === true)}
            routeFrom="faves"
          />)
      }
    }
  
  }
  
  FavesContainer.propTypes = {
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func,
    data: PropTypes.array
  }
  
  function mapStateToProps(state) {
    return {
      data: state.schedule.data,
      isLoading: state.schedule.isLoading
    }
  }

export default connect(mapStateToProps)(FavesContainer)
