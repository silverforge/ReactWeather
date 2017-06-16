import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,

    Image,
    ListView,
    Text,
    View
} from 'react-native';

export default class ForecastListItem extends Component {
    render() {
        return (
            <View style={styles.rowBox}>
                <View style={styles.rowIconBox}>
                    <Image
                        style={styles.rowIcon}
                        source={{uri: this.props.source.icon}} 
                    />

                    <Text style={[styles.rowText, styles.defaultTextStyle]}>{this.props.source.day}</Text>                                
                </View>

                <Text style={[styles.rowText, styles.defaultTextStyle]}>{this.props.source.temperature}</Text>
                <Text style={[styles.rowText, styles.defaultTextStyle]}>ºC</Text>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    defaultTextStyle: {
        color: '#003B3E'
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