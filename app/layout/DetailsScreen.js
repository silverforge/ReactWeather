import React, { Component } from 'react';
import {
    StyleSheet,

    Text,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DetailsScreen extends Component {

    static navigationOptions = {
        title: 'Details',
        headerTintColor: "#FFFFFF",
        headerStyle: { backgroundColor: "#003B3E" },
        headerTitleStyle: { color: "#FFFFFF" }
    };

    render() {
        return (
            <View>
                <Text>Details</Text>
            </View>
        );
    }

}