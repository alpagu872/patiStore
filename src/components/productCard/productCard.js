import React from 'react';
import { View, Text ,Image} from 'react-native'
import styles from './productCard.style'

const productCard = (products) => {
    return (


        <View style = {styles.container}>
            <View>
                <Image style={styles.image}
                source = {{uri:products.imgURL}}/>
                
            </View>
            
        </View>


    )
}

export default productCard;