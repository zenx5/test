import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
//import * as ImagePicker from 'expo-image-picker';


// You can import from local files
//import AssetExample from './components/AssetExample';
//import InputBootstrap from './components/InputBootstrap';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import HeaderTest from './components/HeaderTest.js'
import BodyTest from './components/BodyTest.js'
import FooterTest from './components/FooterTest.js'

export default function App() {
  //
  //<BodyTest></BodyTest>
  //<FooterTest></FooterTest>
  // <HeaderTest style={styles.header}></HeaderTest>
  return (
    <View style={styles.view}>
      <HeaderTest style={styles.header}></HeaderTest> 
      <BodyTest/>
      <FooterTest/>
    </View>
  );
}

const styles = StyleSheet.create({
  view : {
    display:"flex",
    flexDirection:"row",
    flexWrap:'wrap',
    width:'100%',
    backgroundColor:'lightgray'
  },
  header:{
    marginBottom:10
  }
})
