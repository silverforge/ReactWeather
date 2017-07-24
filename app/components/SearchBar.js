import React, { Component } from 'react';
import {
    Keyboard,
    TextInput,
    View
} from 'react-native';
import SearchBarStyle from './styles/SearchBarStyle';
import app_colors from '../_config/app_colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SearchBar extends Component {

    render() {
        return (
            <View style={SearchBarStyle.searchBox}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput 
                        style={SearchBarStyle.searchText} 
                        placeholder={this.props.cityName} 
                        placeholderTextColor={app_colors.bar_text_placeholder}
                        onChangeText={this.props.onCityNameChanged}
                    />
                    
                    <Icon.Button 
                        name="magnify" 
                        size={24} 
                        color={app_colors.button_text} 
                        style={SearchBarStyle.searchIcon} 
                        backgroundColor={app_colors.bar_background}
                        onPress={() => {
                            this.props.onCityNameEntered();
                            Keyboard.dismiss();
                        }}
                    />
                </View>
            </View>
        );
    }
}