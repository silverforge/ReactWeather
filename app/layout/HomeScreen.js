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
import moment from 'moment';
import * as UrlBuilder from '../lib/UrlBuilder';

import appConfig from '../_config/app_config.json';

export default class HomeScreen extends Component {

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
                        let tempDay = moment.unix(element.dt).format("dddd");
                        tempList.push({icon: UrlBuilder.getWeatherIcon(element.weather[0].icon), temperature: element.temp.day, day: tempDay});
                    }, this);

                    console.log(JSON.stringify(tempList));
                    this.setState({temperatureData: tempList});
                }
            );
    }

    render() {
        return (
            <View style={styles.container}>
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
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#E1E9E1'
     }
 });