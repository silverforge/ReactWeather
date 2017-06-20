import React, { Component } from 'react';
import {
    TextInput,
    View
} from 'react-native';
import SearchBarStyle from './styles/SearchBarStyle';
import app_colors from '../_config/app_colors';

export default class SearchBar extends Component {

    render() {
        return (
            <View style={SearchBarStyle.searchBox}>
                <TextInput 
                    style={SearchBarStyle.searchText} 
                    placeholder={this.props.cityName} 
                    placeholderTextColor={app_colors.bar_text_placeholder}
                    onChangeText={this.props.onCityNameChanged}
                    onEndEditing={this.props.onCityNameEntered}
                    />
            </View>
        );
    }
}