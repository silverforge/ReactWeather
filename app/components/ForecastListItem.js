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

export default class ForecastListItem extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <TouchableHighlight 
                underlayColor="#EBEBEB"
                onPress={() => navigate('Details', { item: this.props })}>

                <View>
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

                    <View style={{height: 1, backgroundColor: "#562354", marginHorizontal: 4, marginVertical: 2 }} />
                </View>
            </TouchableHighlight>            
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