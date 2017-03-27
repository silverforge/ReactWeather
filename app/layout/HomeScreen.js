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

                    <View style={styles.box}>
                        <Text style={[styles.boxText, styles.textStyle]}>1</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.boxText, styles.textStyle]}>2</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.boxText, styles.textStyle]}>3</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={[styles.boxText, styles.textStyle]}>4</Text>
                    </View>

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
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'red'
    },
    container2: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white'
    },
    box: {
        width: 70,
        height: 70,
        backgroundColor: '#A34565',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxText: {
        fontSize: 32,
    }
});