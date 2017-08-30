import React, { Component } from 'react'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation'
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import Router from './routes'
import { colors, typography } from '../config/styles'
import { styles } from './styles'

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      fontFamily: typography.fontMain,
    },
    renderBackground: function lg() {
      return (
        <LinearGradient 
          start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
          colors={[colors.red, colors.purple]}
          style={styles.bgTop}
         />
      )
    }
  }
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
      id="schedule"
      title="Schedule"
      renderIcon={(isSelected) => this.renderIcon("ios-calendar", isSelected)}
      renderTitle={this.renderTitle}
      >
        <StackNavigation
          id="schedule"
          navigatorUID="schedule"
          initialRoute={Router.getRoute('schedule')}
          defaultRouteConfig={defaultRouteConfig}
        />
    </TabItem>

    <TabItem
      id="appMap"
      title="Map"
      renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected)}
      renderTitle={this.renderTitle}
      >
        <StackNavigation
          id="appMap"
          navigatorUID="appMap"
          initialRoute={Router.getRoute('appMap')}
          defaultRouteConfig={defaultRouteConfig}
        />
    </TabItem>

    <TabItem
      id="faves"
      title="Faves"
      renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
      renderTitle={this.renderTitle}
      >
        <StackNavigation
          id="faves"
          navigatorUID="faves"
          initialRoute={Router.getRoute('faves')}
          defaultRouteConfig={defaultRouteConfig}
        />
    </TabItem>

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

    </TabNavigation>
    )
  }

  renderIcon(iconName, isSelected) {
    const color = isSelected ? 'white' : colors.mediumGrey;
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