import React, { Component } from 'react'
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import {
  View
} from 'react-native'

import Router from './routes'
import { colors, typography } from '../config/styles'
import { styles } from './styles'
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

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
      <DrawerNavigation
      id='main'
      initialItem='schedule'
      drawerWidth={300}
      renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id='schedule'
          selectedStyle={styles.selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon("md-calendar", isSelected)}
          renderTitle={isSelected => this._renderTitle('Schedule', isSelected)}
        >
        <StackNavigation
          id="schedule"
          navigatorUID="schedule"
          initialRoute={Router.getRoute('schedule')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>

      <DrawerNavigationItem
        id='appMap'
        selectedStyle={styles.selectedItemStyle}
        renderIcon={(isSelected) => this.renderIcon("md-map", isSelected)}
        renderTitle={isSelected => this._renderTitle('Map', isSelected)}
        >
        <StackNavigation
          id="appMap"
          navigatorUID="appMap"
          initialRoute={Router.getRoute('appMap')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>

      <DrawerNavigationItem
          id='faves'
          selectedStyle={styles.selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon("md-heart", isSelected)}
          renderTitle={isSelected => this._renderTitle('Faves', isSelected)}
        >
        <StackNavigation
          id="faves"
          navigatorUID="faves"
          initialRoute={Router.getRoute('faves')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>

      <DrawerNavigationItem
          id='about'
          selectedStyle={styles.selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon("md-information-circle", isSelected)}
          renderTitle={isSelected => this._renderTitle('About', isSelected)}
        >
        <StackNavigation
          id="about"
          navigatorUID="about"
          initialRoute={Router.getRoute('about')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>

    </DrawerNavigation>
    )
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
      </View>
    );
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
        {text}
      </Text>
    );
  };

  renderIcon(iconName, isSelected) {
    const color = isSelected ? colors.purple : colors.mediumGrey;
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