import {
    StyleSheet
} from 'react-native';
import app_colors from '../../_config/app_colors';

export default StyleSheet.create({
    searchBox: {
        justifyContent: 'center',
        backgroundColor: app_colors.bar_background,
        height: 72,
        borderColor: "#00AA99",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    searchText: {
        color: app_colors.bar_text,
        marginHorizontal: 16,
        height: 40,
        marginTop: 20
    },
});