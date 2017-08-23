import React, { Component } from 'react'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import Router from './routes'
import { colors, typography } from '../config/styles'

import { Text } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white'
  }
    
    //titleStyle: {
    //  font intto property here
    //},
    // // renderBackground: () => (
    //   // return component or background
    // )
}

class NavigationLayout extends Component {

  render() {
    return (
    <TabNavigation
      id="main"
      navigatorUID="main"
      initialTab='about'
      tabBarColor="black"
    >

    <TabItem
      id="about"
      title="About"
      renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
      renderTitle={this.renderTitle}
      >
        <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
        />
    </TabItem>

    <TabItem
      id="session"
      title="Session"
      renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
      renderTitle={this.renderTitle}
      >
        <StackNavigation
            id="session"
            navigatorUID="session"
            initialRoute={Router.getRoute('session')}
            defaultRouteConfig={defaultRouteConfig}
        />
      </TabItem>
      
    </TabNavigation>
    )
  }

    /*
    ios-calendar 24
    ios-heart
    ios-information-circle
    */

  renderIcon(iconName, isSelected) {
    const color = isSelected ? 'white' : colors.mediumGrey;
    return <Text>Hi</Text>
    return <Icon name={iconName} size={24} color={color} />
  }

  renderTitle(isSelected, title) {
    const color = isSelected ? 'white' : colors.mediumGrey;
    const titles = {
        color: color,
        fontFamily: typography.fontMain,
        fontSize: 10,
    }
    return <Text style={titles}>{title}</Text>
  }
}

export default NavigationLayout