/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import productCard from './components/productCard'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App () {



  return (
    
    <SafeAreaView style = {styles.container}>
      <View>
        <Text style = {styles.title}>PATIKASTORE</Text>
      </View>

      <View>

      </View>
      

      


    </SafeAreaView>


  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'


  },
  title:{
    fontSize:36,
    color:'purple',
    fontWeight:'bold'

  }
});

export default App;
