import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container1}>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.textStyle}>Me: Hello World!</Text>
                    <Text style={styles.textStyle}>World: I have boyfriend</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 3,
        backgroundColor: 'red'
    },
    container2: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white'
    }
});