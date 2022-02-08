import React from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import styles from './ProductCard.style'


const productCard = ({products}) => {



    return (

        <SafeAreaView>

            <View style={styles.container}>

                <TouchableOpacity activeOpacity={.3}>

                    <Image style={styles.image} source={{ uri: products.imgURL }} />
                    <View style={styles.inner_container}>
                        <Text style={styles.title}>{products.title}</Text>
                        <Text style={styles.price}>{products.price}</Text>
                        <Text style={styles.instock}> {products.inStock.toString()}</Text>
                    </View>
                </TouchableOpacity>

            </View>


        </SafeAreaView>


    )
}

export default productCard;