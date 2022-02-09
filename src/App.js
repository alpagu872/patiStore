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
  TextInput
} from 'react-native';

function App() {

  const renderProduct = ({ item }) => <ProductCard products={item} />
  const keyRender = (item, index) => item.id.toString()

  const [number, onChangeNumber] = React.useState(null);



  return (

    <SafeAreaView style={styles.container}>
      
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ara..."
      />
      


        <FlatList
          data={product_data}
          keyExtractor={keyRender}
          renderItem={renderProduct}
          numColumns = {2}

        />
      

    </SafeAreaView>


  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,


  },
  title: {
    margin: 6,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9b3799',
  },
  input:{
    height: 40,
    margin: 12,
    padding: 1,
    borderRadius:10,
    backgroundColor:'#eceff1',
    textAlign: 'center',

  }
});

export default App;
