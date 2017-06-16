import React, { Component } from 'react';
import {
    TextInput,
    View
} from 'react-native';
import SearchBarStyle from './styles/SearchBarStyle';

export default class SearchBar extends Component {

    render() {
        return (
            <View style={SearchBarStyle.searchBox}>
                <TextInput 
                    style={SearchBarStyle.searchText} 
                    placeholder={this.props.cityName} 
                    placeholderTextColor="#ABABAB"
                    onChangeText={this.props.onCityNameChanged}
                    onEndEditing={this.props.onCityNameEntered}
                    />
            </View>
        );
    }
}