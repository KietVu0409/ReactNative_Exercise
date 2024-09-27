import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Blue from '../assets/lab3_blue.png'; 

export default function Lab3_screen3() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row'}}>
          <Image source={Blue} style={{ width: 112, height: 132, left: 4 }}/>
          <Text style={{ width: 164, height: 36, fontSize: 15, top: 17, left: 50, fontSize: 15, fontFamily: 'Roboto', fontWeight: 400}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
        <View style={{ height: 491, backgroundColor: '#C4C4C4', top: 20 }}>
          <Text style={{ fontSize: 18, top: 17, left: 17, fontSize: 18, fontFamily: 'Roboto', fontWeight: 400 }}>Chọn một màu bên dưới:</Text>
          <View style={{ justifyContent:'center', alignItems:'center' }}>
            <TouchableOpacity style={{ width: 85, height: 80, marginTop: 40, backgroundColor: '#C5F1FB'}}/>
            <TouchableOpacity style={{ width: 85, height: 80, marginTop: 10, backgroundColor: '#F30D0D'}}/>
            <TouchableOpacity style={{ width: 85, height: 80, marginTop: 10, backgroundColor: '#000000'}}/>
            <TouchableOpacity style={{ width: 85, height: 80, marginTop: 10, backgroundColor: '#234896'}}/>
          </View>
          <TouchableOpacity style={{ width: 350, height: 44, marginTop: 20, left: 17, backgroundColor: '#1952E294', justifyContent:'center', alignItems:'center', border: '1px solid #CA1536', borderRadius: 10}}>
            <Text style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: 700, color: '#F9F2F2' }}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });