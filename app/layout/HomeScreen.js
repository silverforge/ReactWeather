import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,

  Image,
  ListView,
  Text,
  TextInput,
  View
} from 'react-native';

const dummyTemperatureData = [
    {icon: '', temperature: 24, day: 'tuesday'},
    {icon: '', temperature: 26, day: 'wednesday'},
    {icon: '', temperature: 29, day: 'thursday'},
    {icon: '', temperature: 31, day: 'friday'},
    {icon: '', temperature: 30, day: 'saturday'},
    {icon: '', temperature: 26, day: 'sunday'},
    {icon: '', temperature: 27, day: 'monday'},
];

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            cityName: "---",
            celsius: 0,
            weatherIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <TextInput 
                        style={styles.searchText} 
                        placeholder="city" 
                        placeholderTextColor="#ABABAB"
                        onEndEditing={(event) => {
                            console.log("::: CITY ::: " + event.nativeEvent.text);
                            let city = event.nativeEvent.text;

                            fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=85ce54fbbc886bee15f72e2e0e8b5a3b")
                            .then((response) => response.json())
                            .then((json) => {
                                console.log("::: JSON :::" + JSON.stringify(json));

                                this.setState({cityName: json.name});
                                this.setState({celsius: json.main.temp});
                                this.setState({weatherIcon: "http://openweathermap.org/img/w/"+json.weather[0].icon+".png"});
                            });

                        }}
                        />
                </View>

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
                    dataSource={this.ds.cloneWithRows(dummyTemperatureData)}
                    renderRow={(rowdata) => {
                        return (
                            <View style={styles.rowBox}>
                                <View style={styles.rowIconBox}>
                                    <Image
                                        style={styles.rowIcon}
                                        source={(require('../_assets/image/reactjsicon.png'))} />

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
        height: 40
    },

    cityBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16
    },
    cityText: {
        fontSize: 64,
        fontWeight: 'bold'
    },

    temperatureBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperatureText: {
        fontSize: 72,
        fontWeight: 'bold',
        marginHorizontal: 4,
    },
    temperatureUnit: {
        fontSize: 48,
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
        alignItems: 'center',
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
        fontSize: 32,
        marginHorizontal: 4       
    }
});