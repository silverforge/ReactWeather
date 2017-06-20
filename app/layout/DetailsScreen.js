import React, { Component } from 'react';
import {
    StyleSheet,

    Image,
    Text,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import app_colors from '../_config/app_colors';

import DefaultStyle from './styles/DefaultStyle';
import ComponentDefaultStyle from '../components/styles/DefaultStyle';

export default class DetailsScreen extends Component {

    static navigationOptions = {
        title: 'Details',
        headerTintColor: app_colors.bar_text,
        headerStyle: { backgroundColor: app_colors.bar_background },
        headerTitleStyle: { color: app_colors.bar_text }
    };

    render() {
        let item = this.props.navigation.state.params.item;
        console.log("::: ITEM ::: " + JSON.stringify(item));

        return (
            <View style={DefaultStyle.screenContainer}>
                <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.title]}>{item.day}</Text>
                <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.title]}>{item.date}</Text>
                <Image
                    style={styles.temperatureIcon} 
                    source={{uri: item.icon}} />



                <View style={styles.subContainer}>
                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Current</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.temperature} ºC</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Min</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.day_min} ºC</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Max</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.day_max} ºC</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Night</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.night} ºC</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Evening</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.evening} ºC</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Morning</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.morning} ºC</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Pressure</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.pressure} HPa</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Humidity</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.humidity} %</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column0]}>Wind</Text>
                        <Text style={[ComponentDefaultStyle.defaultTextStyle, styles.listText, styles.column1]}>{item.wind_speed} km/h</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subContainer: {
        marginTop: 16
    },

    rowView: {
        flexDirection: 'row'
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 4
    },

    temperatureIcon: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginVertical: 8
    },

    listText: {
        fontSize: 20,
        marginVertical: 2,
        marginHorizontal: 4
    },
    column0: {
        flex: 1
    },
    column1: {
        flex: 2
    }
});