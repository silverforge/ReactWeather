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
import HomeScreen from './app/layout/HomeScreen';

export default class RNWeather extends Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <HomeScreen />
    );
  }
}

AppRegistry.registerComponent('RNWeather', () => RNWeather);
