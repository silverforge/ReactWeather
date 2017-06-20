import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    View
} from 'react-native';
import ForecastListItem from './ForecastListItem';

import app_colors from '../_config/app_colors';

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
                renderSeparator={(sectionId, rowId) => <View style={styles.separator} />}
            />            
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        height: 1, 
        backgroundColor: app_colors.separator, 
        marginHorizontal: 4, 
        marginVertical: 2
    }
});