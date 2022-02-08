/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ProductCard from './components/ProductCard'
import product_data from './product_data.json'


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

function App() {

  const renderProduct = ({ item }) => <ProductCard products={item} />
  const keyRender = (item, index) => item.id.toString()



  return (

    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
      </View>


      <View>
        <FlatList
          data={product_data}
          keyExtractor={keyRender}
          renderItem={renderProduct}

        />
      </View>

    </SafeAreaView>


  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'


  },
  title: {
    fontSize: 36,
    color: 'purple',
    fontWeight: 'bold'

  }
});

export default App;
