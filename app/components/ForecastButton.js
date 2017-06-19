import React, { Component } from 'react';
import {
    Platform,

    TouchableOpacity,
    Text,
    View
} from 'react-native';
import ForecastButtonStyle from './styles/ForecastButtonStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // https://github.com/oblador/react-native-vector-icons

import app_colors from '../_config/app_colors';

export default class ForecastButton extends Component {

    fabIcon = (
        <Icon name="weather-partlycloudy" size={24} color={app_colors.button_text} />
    );

    forecastIcon = (
        <Icon name="weather-night" size={20} color={app_colors.button_text} style={{marginHorizontal: 10}} />
    );

    forecastText = (
        <Text style={ForecastButtonStyle.text}>Forecast</Text>
    );

    render() {
        return (
            <TouchableOpacity 
                style={ForecastButtonStyle.container}
                activeOpacity={0.4}
                onPress={this.props.onTapped}>

                <View style={{flexDirection: 'row'}}>
                    {Platform.OS === "ios" ? this.forecastIcon : <View />}
                    {Platform.OS === "android" ? this.fabIcon : this.forecastText}
                </View>
            </TouchableOpacity>
        );
    }
}