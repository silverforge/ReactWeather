import React, { Component } from 'react';
import {
    StyleSheet,

    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const FeedStack = StackNavigator({ // https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen}
}, {
    initialRouteName: 'Home',
    headerMode: 'screen'
});

export default class ShellScreen extends Component {
    render() {
        return (<FeedStack />);
    }
}