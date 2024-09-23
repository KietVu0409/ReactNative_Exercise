import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import React from "react";
import User_img from '../assets/user.png';
import Lock_img from '../assets/lock.png';
import Eye_img from '../assets/eye.png';

export default function Lab02_a() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}><b>LOGIN</b></Text>
        </View>
        <View style={styles.viewInput}>
          <Image source={User_img} style={styles.icon}/>
          <TextInput placeholder='Name' style={styles.textInput}/>
        </View>
        <View style={styles.viewInput}>
          <Image source={Lock_img} style={styles.icon}/>
          <TextInput placeholder='Password' style={styles.textInput}/>
          <Image source={Eye_img} style={styles.icon}/>
        </View>
        <TouchableOpacity style={styles.viewLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.viewTextFinal}>
          <Text style={styles.textFinal}>Forgot your password?</Text> 
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',
    },
    viewTitle: {
      marginTop: '70px'
    },
    textTitle: {
      fontFamily: 'Roboto',
      fontSize: '30px',
      marginBottom: '50px'
    },
    viewInput: {
      marginTop: '30px',
      marginLeft: '30px',
      flexDirection: 'row',
      border: '1px solid #F2F2F2',
      width: '330px',
      height: '54px',
      alignItems:'center', 
    },
    icon: {
      margin: '10px',
      width: '32px',
      height: '32px',
    },
    textInput: {
      width: '330px',
      height: '54px',
      color: 'black',
      padding: '10px'
    }, 
    viewLogin: {
      width: '330px',
      height: '54px',
      marginTop: '70px',
      marginLeft: '30px',
      backgroundColor:'black', 
      alignItems:'center', 
      justifyContent:'center', 
      borderRadius:3
    },
    textLogin: {
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: '20px', 
      padding: 0
    },
    viewTextFinal: {
      marginTop: '50px'
    },
    textFinal: {
      fontWeight: 'bold', 
      textAlign: 'center', 
      fontSize: '18px'
    }
  });
  