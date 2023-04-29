/*
* File: App.js
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II M
* Date: 2023-04-29
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const[bikes, setBikes] = useState([]);

  function getBikes() {
    let host = 'http://localhost:8000/';
    let endpoint = 'bikes'
    let url = host + endpoint;

    fetch(url)
    .then(response => response.json())
    .then(result =>{
      setBikes(result);
    });
  }

  useEffect(()=>{
    getBikes();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biciklik</Text>

      <FlatList style={styles.fullList}
      data={bikes}
      renderItem = {({item}) => (
        <Text style={styles.list}>Név: {item.name}  Ár: {item.price}</Text>
      )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:28,
    fontFamily:'Courier new'
  },
  list:{
    padding:8,
    fontSize:20
  },
  fullList:{
    backgroundColor:'white'
  }
});
