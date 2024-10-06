import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-web';


import Vector_img from '../assets/Vector.png'
import Shop_img from '../assets/shop.png'
import Timkiem_img from '../assets/timKiem.png'
import HinhTron_img from '../assets/hinhTron.png'
import Menu_img from '../assets/menu.png'
import Home_img from '../assets/home.png'
import Back_img from '../assets/back.png'

export default function Lab04_b() {
  const DATA =[
    {
      img: require('../assets/cap_1.png'),
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      img_2: require('../assets/danhGia.png'),
      cost: '69.900đ',
      giam: '-39%'
    },
    {
      img: require('../assets/cap_2.png'),
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      img_2: require('../assets/danhGia.png'),
      cost: '69.900đ',
      giam: '-39%'
    },
    {
      img: require('../assets/cap_3.png'),
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      img_2: require('../assets/danhGia.png'),
      cost: '69.900đ',
      giam: '-39%'
    },
    {
      img: require('../assets/cap_4.png'),
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      img_2: require('../assets/danhGia.png'),
      cost: '69.900đ',
      giam: '-39%'
    },
    {
      img: require('../assets/cap_5.png'),
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      img_2: require('../assets/danhGia.png'),
      cost: '69.900đ',
      giam: '-39%'
    },
    {
      img: require('../assets/cap_6.png'),
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      img_2: require('../assets/danhGia.png'),
      cost: '69.900 đ',
      giam: '-39%'
    },
]
  
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 42, backgroundColor: '#1BA9FF', flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-around'}}>
        <TouchableOpacity>
          <Image source={Vector_img} style={{ width: 24, height: 24, }}/>
        </TouchableOpacity>
        <View style={{width: 192, height: 30, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Timkiem_img} style={{width: 24, height: 24, marginLeft: 10}}/>
          <Text style={{marginLeft: 20}}>Dây cáp usb</Text>
        </View>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={Shop_img} style={{ width: 24, height: 24 }}/>
          <Image source={HinhTron_img} style={{width: 15, height: 15, marginBottom: 15}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Menu_img} style={{ width: 24, height: 24 }}/>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList data = {DATA} numColumns={2}  renderItem={({item})=>{
          return(
            <View style={{backgroundColor: '#e5e5e5', marginHorizontal: '5px', }}>
              <TouchableOpacity>
                <View style={{alignItems: 'center', marginVertical: '5px',flexDirection: 'row', justifyContent:'center'}}>
                  <Image source={item.img} style={{width: '180px', height: '100px'}}></Image>                                    
                </View>
              </TouchableOpacity>
              <Text style={{fontSize: 12, width: 150, left: 20}}>{item.name}</Text>
              <View style={{flexDirection: 'row', justifyContent: "center", alignItems: 'center', }}>          
                <TouchableOpacity>
                  <Image source={item.img_2} style={{width: '150px', height: '20px'}}></Image>
                </TouchableOpacity>               
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight:'bold'}}>{item.cost}  </Text>
                <Text style={{color: 'grey'}}>{item.giam}</Text>
              </View>
            </View>       
          )
        }}>
        </FlatList>
      </ScrollView>

      <View style={{width: '100%', height: 42, backgroundColor: '#1BA9FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity>
          <Image source={Menu_img} style={{ width: 24, height: 24, }}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Home_img} style={{ width: 24, height: 24, }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Lab04_a')}}>
          <Image source={Back_img} style={{ width: 24, height: 24, }}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  }
});