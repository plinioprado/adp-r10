import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ActivityIndicator} from 'react-native'
import { scheduleFetch } from '../../redux/modules/schedule'
import Schedule from '../Schedule/Schedule'

class FavesContainer extends Component {

    componentDidMount(props) {
      this.props.dispatch(scheduleFetch())
    }

    static route = {
      navigationBar: {
        title: 'Faves'
      }
    }

    render() {

      if (this.props.isLoading) {
        return <ActivityIndicator />
      } else {
        console.log(this.props.data)
        return (
          <Schedule
            list={this.props.data.filter(item => item.data[0].fav === true)}
          />)
      }
    }
  
  }
  
  FavesContainer.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.array,
  };
  
  function mapStateToProps(state) {
    return {
      data: state.schedule.data,
      isLoading: state.schedule.isLoading
    }
  }

export default connect(mapStateToProps)(FavesContainer)
