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
        let item = this.props.navigation.state.params.item;
        console.log("::: ITEM ::: " + JSON.stringify(item));

        return (
            <View>
                <Text>Details</Text>
                <Text>{item.day}</Text>
                <Text>{item.date}</Text>
                <Text>{item.temperature}</Text>
                <Text>{item.day_min}</Text>
                <Text>{item.day_max}</Text>
                <Text>{item.night}</Text>
                <Text>{item.evening}</Text>
                <Text>{item.morning}</Text>
                <Text>{item.pressure}</Text>
                <Text>{item.humidity}</Text>
                <Text>{item.speed}</Text>
            </View>
        );
    }

}