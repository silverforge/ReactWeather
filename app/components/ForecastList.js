import React, { Component } from 'react';
import {
    ListView
} from 'react-native';
import ForecastListItem from './ForecastListItem';

export default class ForecastList extends Component {

    constructor(props, context) {
        super(props, context);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    render() {
        return(
            <ListView
                dataSource={this.ds.cloneWithRows(this.props.items)}
                enableEmptySections={true}
                renderRow={(rowdata) => {
                    return (
                        <ForecastListItem
                            source={rowdata}
                            navigation={this.props.navigation}
                        />
                    );
                }}
            />            
        );
    }
}