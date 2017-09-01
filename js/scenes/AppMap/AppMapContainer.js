import React, { Component } from 'react'

import AppMap from './AppMap'

// import MapView from 'react-native-maps'
// import pinImage from '../../assets/images/map_pin.png'
// import { styles } from './styles'

class AppMapContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Map'
    }
  }

  render() {
    return (
      <AppMap />
      )
  }
}   
  
export default AppMapContainer