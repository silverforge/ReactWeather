import {
    StyleSheet
} from 'react-native';
import app_colors from '../../_config/app_colors';

export default StyleSheet.create({
    searchBox: {
        backgroundColor: app_colors.bar_background,
        height: 68,
        elevation: 8
    },
    searchText: {
        flexGrow: 1,
        color: app_colors.bar_text,
        marginHorizontal: 16,
        marginTop: 8,
        height: 40
    },
    searchIcon: {
        marginHorizontal: 8,
        marginTop: 8
    }
});