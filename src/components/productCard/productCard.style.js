import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    inner_container:
    {
        flex: 1,
        margin: 5,
        padding: 6,
        paddingTop: 0,
        borderRadius: 6,
        backgroundColor: '#eceff1',


    },
    image: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 4,
        borderRadius: 6,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    price: {
        marginTop: 3,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#666'
    },
    instock: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'

    }

})