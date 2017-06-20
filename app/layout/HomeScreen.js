import React, { Component } from 'react';
import {
    StyleSheet,

    View
} from 'react-native';

import SearchBar from '../components/SearchBar';
import ForecastButton from '../components/ForecastButton';
import CityTemperatureView from '../components/CityTemperatureView';
import ForecastList from '../components/ForecastList';
import fetcher from '../lib/Fetcher';
import * as ForecastMapper from '../lib/mappers/DailyForecastToForecastListItem';
import * as UrlBuilder from '../lib/UrlBuilder';

import appConfig from '../_config/app_config.json';
import DefaultStyle from './styles/DefaultStyle';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home', 
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            cityName: "city",
            celsius: 0,
            weatherIcon: appConfig.defaultIconUrl,
            temperatureData: []
        }
    }

    _fetchCurrentWeather = () => { // use fat arrow functions to avoid binding
        let urlString = UrlBuilder.getCurrentWeatherUrl(this.state.cityName);
        fetcher(
            urlString,
            (json) => {
                    console.log("::: JSON :::" + JSON.stringify(json));

                    this.setState({cityName: json.name});
                    this.setState({celsius: json.main.temp});
                    this.setState({weatherIcon: UrlBuilder.getWeatherIcon(json.weather[0].icon)});
                }
            );
    }

    _fetchForecastWeather = () => {
        let urlString = UrlBuilder.getForecastWeatherUrl(this.state.cityName);
        fetcher(
            urlString,
            (json) => {
                    console.log("::: JSON :::" + JSON.stringify(json));

                    let tempList = [];
                    json.list.forEach(function(element) {
                        tempList.push(ForecastMapper.map(element));
                    }, this);

                    console.log(JSON.stringify(tempList));
                    this.setState({temperatureData: tempList});
                }
            );
    }

    render() {
        return (
            <View style={DefaultStyle.screenContainer}>
                <SearchBar 
                    cityName={this.state.cityName}
                    onCityNameChanged={text => this.setState({cityName : text})}
                    onCityNameEntered={event => this._fetchCurrentWeather()}
                />

                <CityTemperatureView
                    cityName={this.state.cityName}
                    weatherIcon={this.state.weatherIcon}
                    celsius={this.state.celsius}
                />

                <ForecastButton 
                    onTapped={() => this._fetchForecastWeather()} 
                />

                <ForecastList
                    items={this.state.temperatureData}
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}