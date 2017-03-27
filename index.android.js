/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar
} from 'react-native';
import HomeScreen from './app/layout/HomeScreen';

export default class RNWeather extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <HomeScreen />
    );
  }
}

AppRegistry.registerComponent('RNWeather', () => RNWeather);
