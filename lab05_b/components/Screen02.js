import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen02() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{width: 255, height: 29}}>
        <Text style={styles.paragraph}>
          The world’s Best Bike
        </Text>
      </View>
      <View style={{width: 320, height: 40, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={{width: 99, height: 32, borderRadius: 5, border: '1px solid #E9414187', justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20, fontFamily: 'Voltaire', fontWeight: 400, color: '#BEB6B6'}}>All</Text></TouchableOpacity>
        <TouchableOpacity style={{width: 99, height: 32, borderRadius: 5, border: '1px solid #E9414187', justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20, fontFamily: 'Voltaire', fontWeight: 400, color: '#BEB6B6'}}>Roadbike</Text></TouchableOpacity>
        <TouchableOpacity style={{width: 99, height: 32, borderRadius: 5, border: '1px solid #E9414187', justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20, fontFamily: 'Voltaire', fontWeight: 400, color: '#BEB6B6'}}>Mountain</Text></TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
    width: 375,
    height: 812,
    borderRadius: 10,
    border: '1px solid black',
    flex: 1,
  },
  paragraph: {
    fontSize: 25,
    lineHeight: 28.73,
    fontWeight: 700 ,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    color: '#E94141'
  },
});
