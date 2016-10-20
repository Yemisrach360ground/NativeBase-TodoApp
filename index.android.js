/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';
import Index from './app/index';

class ReduxTime extends Component { // eslint-disable-line
  render() { // eslint-disable-line class-methods-use-this
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
      // <Index />
      // <Test />
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={'#304FFE'}
          barStyle="light-content"
        />
        <Index />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReduxTime', () => ReduxTime);
