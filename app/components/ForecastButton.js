import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,

    Text,
    View
} from 'react-native';
import ForecastButtonStyle from './styles/ForecastButtonStyle';


export default class ForecastButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity 
                style={ForecastButtonStyle.container}
                activeOpacity={0.4}
                onPress={this.props.onTapped}>

                <View>
                    <Text style={ForecastButtonStyle.text}>Forecast</Text>
                </View>
            </TouchableOpacity>
        );
    }
}