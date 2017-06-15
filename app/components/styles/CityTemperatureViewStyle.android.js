import {
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
    cityBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16
    },
    cityText: {
        fontSize: 56,
        fontWeight: 'bold'
    },

    temperatureBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperatureText: {
        fontSize: 64,
        fontWeight: 'bold',
        marginHorizontal: 4,
    },
    temperatureUnit: {
        fontSize: 42,
        marginTop: -10
    },
    temperatureIcon: {
        width: 80,
        height: 80,
        marginHorizontal: 20
    }
});