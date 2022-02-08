import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: 
    {
        backgroundColor: 'gray',
        margin: 10,
        borderRadius: 10,
        


    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    title: { 
        margin: 5,
        fontWeight: 'bold',
        fontSize: 18,
    },
    price:{
        margin : 10,
    },
    instock:{
        margin : 10,
        align: 'center',
        fontColor: 'white',

    }

})