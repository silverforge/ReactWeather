import {
    StyleSheet
} from 'react-native'
import app_colors from '../../_config/app_colors'

export default StyleSheet.create({
    searchBox: {
        justifyContent: 'center',
        backgroundColor: app_colors.bar_background,
        height: 68,
        elevation: 8
    },
    searchText: {
        color: app_colors.bar_text,
        marginHorizontal: 16,
        height: 40
    },
});