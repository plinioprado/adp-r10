import React, { Component } from 'react'
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import {
  StyleSheet,
  View
} from 'react-native'

import Router from './routes'
import { colors, typography } from '../config/styles'
import { styles } from './styles'
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const defaultRouteConfig = {
  navigationBar: {
    visible: false
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

// const styles = StyleSheet.create({
//   header: {
//     height: 20
//   },

//   selectedItemStyle: {
//     backgroundColor: 'blue'
//   },

//   titleText: {
//     fontWeight: 'bold'
//   },

//   selectedTitleText: {
//     color: 'white'
//   }
// })

export default NavigationLayout