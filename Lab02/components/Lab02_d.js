import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity,Image } from 'react-native';
import Book_img from '../assets/book.png';



export default function Lab02_d() {
  let [quanlity,setQuanlity] = useState(1);
  let [priceTemp, setPriceTemp] = useState('141.800'+' đ')
  return (
    
    <View style={styles.container} >
      
      <View style={styles.viewHeader}>
        <Image style={styles.imgHeader} source={Book_img}/>
        <View>
          <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.textCost}>{priceTemp}</Text>
          <Text style={styles.textCostSolid}><del>141.800 đ</del></Text>

          <View style={styles.viewQuantity}>
            <TouchableOpacity onPress={() => { setQuanlity(quanlity - 1); setPriceTemp(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(141800 * (quanlity - 1))) }} 
                style={{ backgroundColor:'#bbbbbb', height:20, width:20, justifyContent:'center', alignItems:'center' }}>-</TouchableOpacity>
            <TextInput id='quanlity' style={{ width:16, fontSize: 15, fontWeight: 'bold', margin: 14}} value={quanlity}></TextInput>
            <TouchableOpacity onPress={() => { setQuanlity(quanlity + 1); setPriceTemp(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(141800*(quanlity+1)))}} 
                style={{ backgroundColor:'#bbbbbb', height:20, width:20, justifyContent:'center', alignItems:'center' }}>+</TouchableOpacity>
            <Text style={{ color:'blue', fontWeight: 700, fontFamily: 'Roboto', marginLeft: 60}}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>Mã giảm giá đã lưu</Text>
        <Text style={{ color:'blue', fontWeight: 700, fontFamily: 'Roboto', marginLeft: 20, marginTop: 14 }}>Xem tại đây</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 20 }}>
        <TouchableOpacity style={{ borderRadius:2, borderWidth:1, alignItems:'center', flexDirection:'row', width: 208, height: 45 }}>
          <Image style={{ height:20, width: 30, marginLeft: 10 }} source={{ uri:'https://tingiasoc.com/wp-content/uploads/2020/03/ma-giam-gia-shopee-tgs.png'}}></Image>
          <Text style={{ fontSize: 18, fontWeight: 700, fontFamily: 'Roboto', marginLeft: 10 }}>Mã giảm giá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 2, backgroundColor:'blue', justifyContent:'center', alignItems:'center', width: 100, height: 45, marginLeft: 25 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 700, fontFamily: 'Roboto' }}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "#bbbbbb", marginLeft: '-5%', marginRight: '-5%', height: 14, marginTop: 30 }}/>

      <View style={{ flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginTop: 20, marginLeft: 20}}>
        <Text style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Roboto' }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Roboto', color:'blue' }}>   Nhập tại đây?</Text>
      </View>

      <View style={{ backgroundColor: "#bbbbbb", marginLeft: '-5%', marginRight: '-5%', height: 14, marginTop: 30 }}/>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginLeft: 20, marginRight: 30 }}>
        <Text style={{ fontSize: 21, fontWeight: 700, fontFamily: 'Roboto' }}>Tạm tính</Text>
        <TextInput style={{ width: 100, fontSize: 20, fontWeight: 'bold', color: 'red' }} value={priceTemp}></TextInput>
      </View>

      <View style={{ backgroundColor: "#bbbbbb", marginLeft: '-5%', marginRight: '-5%', height: 70, marginTop: 20 }}/>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginLeft: 20, marginRight: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#bbbbbb'}}> Thanh tien</Text>
        <TextInput style={{ width: 100, fontSize: 20, fontWeight: 'bold', color: 'red' }} value={priceTemp}></TextInput>
      </View>

      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 20, marginRight: 30, backgroundColor:'red', borderRadius:3, height: 50}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> TIEN HANH DAT HANG</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewHeader: {
    flexDirection: 'row'
  },
  imgHeader: {
    width: '124px',
    height: '160px',
    marginLeft: '10px',
    marginTop: '8px',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 700,
    marginLeft: '15px',
    marginTop: '14px',
  },
  textCost: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: 700,
    marginLeft: '15px',
    marginTop: '14px',
    color: '#EE0D0D'
  },
  textCostSolid: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 700,
    marginLeft: '15px',
    marginTop: '14px',
    color: '#808080'
  },
  viewQuantity: {
    flexDirection: 'row',
    alignItems:'center',
    marginLeft: '15px',
  }
});