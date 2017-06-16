/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  Text,
  View
} from 'react-native';
import ShellScreen from './app/layout/ShellScreen';

export default class RNWeather extends Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <ShellScreen />
    );
  }
}

AppRegistry.registerComponent('RNWeather', () => RNWeather);
