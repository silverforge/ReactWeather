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

import moment from 'moment';

const defaultIconUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            cityName: "city",
            celsius: 0,
            weatherIcon: defaultIconUrl,
            temperatureData: [
                {icon: defaultIconUrl, temperature: 24, day: 'tuesday'},
                {icon: defaultIconUrl, temperature: 26, day: 'wednesday'},
                {icon: defaultIconUrl, temperature: 29, day: 'thursday'},
                {icon: defaultIconUrl, temperature: 31, day: 'friday'},
                {icon: defaultIconUrl, temperature: 30, day: 'saturday'},
                {icon: defaultIconUrl, temperature: 26, day: 'sunday'},
                {icon: defaultIconUrl, temperature: 27, day: 'monday'},
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar 
                    cityName={this.state.cityName}
                    onCityNameChanged={text => {
                        this.setState({cityName : text});
                    }}
                />

                {/*<View style={styles.searchBox}>
                    <TextInput 
                        style={styles.searchText} 
                        placeholder="city" 
                        placeholderTextColor="#ABABAB"
                        onEndEditing={(event) => {
                            console.log("::: CITY ::: " + event.nativeEvent.text);
                            let data = {
                                city: event.nativeEvent.text, 
                                apikey: "85ce54fbbc886bee15f72e2e0e8b5a3b", 
                                unit: "metric",
                                count: 7
                            };

                            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=${data.unit}&APPID=${data.apikey}`)
                                .then((response) => response.json())
                                .then((json) => {
                                    console.log("::: JSON :::" + JSON.stringify(json));

                                    this.setState({cityName: json.name});
                                    this.setState({celsius: json.main.temp});
                                    this.setState({weatherIcon: "http://openweathermap.org/img/w/"+json.weather[0].icon+".png"});
                                })
                                .catch((error) => {
                                    console.log("::: ERROR :::" + error.message);
                                });

                            fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${data.city}&units=${data.unit}&APPID=${data.apikey}&cnt=${data.count}`)
                                .then((response) => response.json())
                                .then((json) => {
                                    let tempList = [];

                                    json.list.forEach(function(element) {
                                        let tempDay = moment.unix(element.dt).format("dddd");
                                        tempList.push({icon: "http://openweathermap.org/img/w/"+element.weather[0].icon+".png", temperature: element.temp.day, day: tempDay});
                                    }, this);

                                    console.log(JSON.stringify(tempList));

                                    this.setState({temperatureData: tempList});
                                })
                                .catch((error) => {
                                    console.log("::: ERROR :::" + error.message);
                                });
                        }}
                        />
                </View>*/}

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