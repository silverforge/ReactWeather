import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,

    Image,
    ListView,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DefaultStyle from './styles/DefaultStyle';

import app_colors from '../_config/app_colors';

export default class ForecastListItem extends Component {
    render() {
        const { navigate } = this.props.navigation;
        console.log("::: DETAILS SOURCE ::: " + JSON.stringify(this.props.source));

        return (
            <TouchableHighlight 
                underlayColor={app_colors.highlight}
                onPress={() => navigate('Details', { item: this.props.source })}>

                <View>
                    <View style={styles.rowBox}>
                        <View style={styles.rowIconBox}>
                            <Image
                                style={styles.rowIcon}
                                source={{uri: this.props.source.icon}} 
                            />

                            <Text style={[styles.rowText, DefaultStyle.defaultTextStyle]}>{this.props.source.day}</Text>                                
                        </View>

                        <Text style={[styles.rowText, DefaultStyle.defaultTextStyle]}>{this.props.source.temperature}</Text>
                        <Text style={[styles.rowText, DefaultStyle.defaultTextStyle]}>ºC</Text>
                    </View>

                    <View style={{height: 1, backgroundColor: app_colors.separator, marginHorizontal: 4, marginVertical: 2 }} />
                </View>
            </TouchableHighlight>            
        );
    }
}

const styles = StyleSheet.create({
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