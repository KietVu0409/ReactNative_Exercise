import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import React, {useContext} from 'react';
import { MyContext } from "../App"
import {useNavigation} from "@react-navigation/native";
import Sao from '../assets/lab3_sao.png';
import Icon from '../assets/lab3_icon.png';

export default function Lab3_screen1() {
  let { img, setImg } = useContext(MyContext)
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewIMG}>
        <Image source={img} style={styles.img}/>
      </View>
      <View style={styles.viewTextInfo}>
        <Text style={styles.textInfo}>
          Điện thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.viewSao}>
        <Image source={Sao} style={styles.img_sao}/>
        <Image source={Sao} style={styles.img_sao}/>
        <Image source={Sao} style={styles.img_sao}/>
        <Image source={Sao} style={styles.img_sao}/>
        <Image source={Sao} style={styles.img_sao}/>
        <Text style={styles.textSao}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.viewTextCost}>
        <Text style={styles.textCost}><b>1.790.000 đ</b></Text>
        <Text style={styles.textCost2}><b>1.790.000 đ</b></Text>
      </View>
      <View style={styles.viewText2}>
        <Text style={styles.text2}><b>Ở ĐÂU RẺ HƠN HOÀN TIỀN</b></Text>
        <Image source={Icon} style={styles.img_icon}/>
      </View>
      <TouchableOpacity style={styles.viewBtnColor}
                        onPress={() => navigation.navigate('PickColor')}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>
      <View style={styles.viewBtnBuy} >
        <input type='button' value='CHỌN MUA' style={styles.inputClickBuy}></input>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewIMG: {
    alignItems: "center"
  },
  img: {
    width: '350px',
    height: '400px'
  },
  viewTextInfo: {
    marginLeft: '20px',
  },
  textInfo: {
    fontSize: '17px'
  },
  viewSao: {
    marginLeft: '20px',
    marginTop: '10px',
    flexDirection: 'row',
  },
  img_sao: {
    width: '30px',
    height: '30px'
  },
  textSao: {
    fontSize: '17px',
    marginTop: '2px',
    marginLeft: '10px'
  },
  viewTextCost: {
    marginLeft: '20px',
    marginTop: '10px',
    flexDirection: 'row'
  },
  textCost: {
    fontSize: '20px',
  },
  textCost2: {
    fontSize: '17px',
    color: 'grey',
    marginTop: '3px',
    marginLeft: '50px',
    textDecorationLine: 'line-through'
  },
  viewText2: {
    marginLeft: '20px',
    marginTop: '10px',
    flexDirection: 'row'
  },
  text2: {
    fontSize: '17px',
    color: 'red'
  },
  img_icon: {
    width: '20px',
    height: '20px',
    marginLeft: '10px',
    marginTop: '3px'
  },
  viewBtnColor: {
    marginLeft: '20px',
    marginTop: '20px',
    width: '350px',
    border: '1px solid grey',
    borderRadius: '10px',
    height: '35px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewBtnBuy: {
    marginLeft: '20px',
    marginTop: '30px',
  },
  inputClickBuy: {
    width: '350px',
    border: '1px solid red',
    borderRadius: '10px',
    backgroundColor: 'red',
    height: '40px',
    fontSize: '20px',
    color: 'white'
  }
});