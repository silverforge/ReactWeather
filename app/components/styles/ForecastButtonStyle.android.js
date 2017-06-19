import {
    StyleSheet
} from 'react-native'
import app_colors from '../../_config/app_colors'

export default StyleSheet.create({
    container: {
        backgroundColor: app_colors.button_background_dark,
        borderColor: app_colors.button_background_dark,
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1, // in order to bring the fab to front, otherwise it's below the component so will not been touchable
        bottom: 20,
        right: 20,
        elevation: 16
    },
    text: {
        fontSize: 8,
        color: app_colors.button_text
    }
});