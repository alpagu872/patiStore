import React from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import styles from './ProductCard.style'


const productCard = ({products}) => {



    return (

       

            <View style={styles.container}>

                <TouchableOpacity activeOpacity={.3}>

                    <Image style={styles.image} source={{ uri: products.imgURL }} resizeMode={'contain'} />
                    <View style={styles.inner_container}>
                        <Text style={styles.title}>{products.title}</Text>
                        <Text style={styles.price}>{products.price}</Text>
                        {!products.inStock ? <Text style={styles.instock}>STOKTA YOK</Text> : null}
                    </View>
                </TouchableOpacity>

            </View>


       


    )
}

export default productCard;