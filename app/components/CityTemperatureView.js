import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,

    Image,
    Text,
    View
 } from 'react-native';
import DefaultStyle from './styles/DefaultStyle'
import CityTemperatureViewStyle from './styles/CityTemperatureViewStyle'

export default class CityTemperatureView extends Component {

    render() {
        return (
            <View>
                <View style={CityTemperatureViewStyle.cityBox}>
                    <Text style={[DefaultStyle.defaultTextStyle, CityTemperatureViewStyle.cityText]}>{this.props.cityName}</Text>
                </View>
                
                <View style={CityTemperatureViewStyle.temperatureBox}>
                    <Image
                        style={CityTemperatureViewStyle.temperatureIcon} 
                        source={{uri: this.props.weatherIcon}} />

                    <Text style={[DefaultStyle.defaultTextStyle, CityTemperatureViewStyle.temperatureText]}>{this.props.celsius}</Text>
                    <Text style={[DefaultStyle.defaultTextStyle, CityTemperatureViewStyle.temperatureText, CityTemperatureViewStyle.temperatureUnit]}>ºC</Text>
                </View>
            </View>
        );
    }
}
