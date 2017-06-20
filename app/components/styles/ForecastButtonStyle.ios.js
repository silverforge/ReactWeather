import {
    StyleSheet
} from 'react-native'
import app_colors from '../../_config/app_colors'

export default StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        marginTop: 16,
        padding: 10,
        backgroundColor: app_colors.button_background_light,
        borderColor: app_colors.button_background_dark,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 14,
        color: app_colors.button_text
    }
});