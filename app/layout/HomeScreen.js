import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,

    Image,
    ListView,
    Platform,
    Text,
    TextInput,
    View
} from 'react-native';

import SearchBar from '../components/SearchBar';
import ForecastButton from '../components/ForecastButton';
import fetcher from '../lib/Fetcher';
import moment from 'moment';
import * as UrlBuilder from '../lib/UrlBuilder';

import appConfig from '../_config/app_config.json';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            cityName: "city",
            celsius: 0,
            weatherIcon: appConfig.defaultIconUrl,
            temperatureData: [
                {icon: appConfig.defaultIconUrl, temperature: 24, day: 'tuesday'},
                {icon: appConfig.defaultIconUrl, temperature: 26, day: 'wednesday'},
                {icon: appConfig.defaultIconUrl, temperature: 29, day: 'thursday'},
                {icon: appConfig.defaultIconUrl, temperature: 31, day: 'friday'},
                {icon: appConfig.defaultIconUrl, temperature: 30, day: 'saturday'},
                {icon: appConfig.defaultIconUrl, temperature: 26, day: 'sunday'},
                {icon: appConfig.defaultIconUrl, temperature: 27, day: 'monday'},
            ]
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

                <ForecastButton 
                    onTapped={() => this._fetchForecastWeather()} />

                <View style={styles.cityBox}>
                    <Text style={[styles.defaultTextStyle, styles.cityText]}>{this.state.cityName}</Text>
                </View>
                
                <View style={styles.temperatureBox}>
                    <Image
                        style={styles.temperatureIcon} 
                        source={{uri: this.state.weatherIcon}} />

                    <Text style={[styles.defaultTextStyle, styles.temperatureText]}>{this.state.celsius}</Text>
                    <Text style={[styles.defaultTextStyle, styles.temperatureText, styles.temperatureUnit]}>ºC</Text>
                </View>

                <ListView
                    dataSource={this.ds.cloneWithRows(this.state.temperatureData)}
                    renderRow={(rowdata) => {
                        return (
                            <View style={styles.rowBox}>
                                <View style={styles.rowIconBox}>
                                    <Image
                                        style={styles.rowIcon}
                                        source={{uri: rowdata.icon}} />

                                    <Text style={[styles.rowText, styles.defaultTextStyle]}>{rowdata.day}</Text>                                
                                </View>

                                <Text style={[styles.rowText, styles.defaultTextStyle]}>{rowdata.temperature}</Text>
                                <Text style={[styles.rowText, styles.defaultTextStyle]}>ºC</Text>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E9E1'
    },
    defaultTextStyle: {
        color: '#003B3E'
    },

    searchBox: {
        justifyContent: 'center',
        backgroundColor: '#003B3E',
        height: 68
    },
    searchText: {
        color: 'white',
        marginHorizontal: 16,
        height: 40,
        marginTop: Platform.OS === 'ios' ? 20 : 0
    },

    cityBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16
    },
    cityText: {
        fontSize: Platform.OS === 'ios' ? 44 : 56,
        fontWeight: 'bold'
    },

    temperatureBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperatureText: {
        fontSize: Platform.OS === 'ios' ? 44 : 64,
        fontWeight: 'bold',
        marginHorizontal: 4,
    },
    temperatureUnit: {
        fontSize: 42,
        marginTop: -10
    },
    temperatureIcon: {
        width: 80,
        height: 80,
        marginHorizontal: 20
    },

    rowBox: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 2,
        alignItems: 'center'
    },
    rowIconBox: {
        flex: 1,
        flexDirection: 'row'
    },
    rowIcon: {
        width: 50,
        height: 50,
    },
    rowText: {
        fontSize: Platform.OS === 'ios' ? 22 : 32,
        marginHorizontal: 4,
        alignSelf: 'center'   
    }
});