import {
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
    searchBox: {
        justifyContent: 'center',
        backgroundColor: '#003B3E',
        height: 72,
        borderColor: "#00AA99",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    searchText: {
        color: 'white',
        marginHorizontal: 16,
        height: 40,
        marginTop: 20
    },
});