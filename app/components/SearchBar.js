import React, { Component } from 'react';
import {
    TextInput,
    View
} from 'react-native';
import SearchBarStyle from './styles/SearchBarStyle';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.cityName = props.cityName;
    }

    render() {
        return (
            <View style={SearchBarStyle.searchBox}>
                <TextInput 
                    style={SearchBarStyle.searchText} 
                    placeholder={this.cityName} 
                    placeholderTextColor="#ABABAB"
                    onChangeText={this.props.onCityNameChanged}
                    onEndEditing={this.props.onCityNameEntered}
                    />
            </View>
        );
    }
}