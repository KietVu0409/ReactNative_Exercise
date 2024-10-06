import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-web';


import Vector_img from '../assets/Vector.png'
import Shop_img from '../assets/shop.png'
import Menu_img from '../assets/menu.png'
import Home_img from '../assets/home.png'
import Back_img from '../assets/back.png'

export default function Lab04_a({navigation}) {
  const DATA =[
    {
      img: require('../assets/ca_nau_lau.png'),
      name: 'Ca nấu lẫu, nấu mì mini...',
      shopName: 'Devang'
    },
    {
      img: require('../assets/kho_ga.png'),
      name: '1KG KHÔ GÀ BƠ TỎI...',
      shopName: 'LTD Food'
    },
    {
      img: require('../assets/xe_can_cau.png'),
      name: 'Xe cần cẩu đa năng',
      shopName: 'Thế giới đồ chơi'
    },
    {
      img: require('../assets/do_choi_mo_hinh.png'),
      name: 'Đồ chơi dạng mô hình',
      shopName: 'Thế giới đồ chơi'
    },
    {
      img: require('../assets/sach.png'),
      name: 'Lãnh đạo giản đơn',
      shopName: 'Minh Long Book'
    },
    {
      img: require('../assets/sach_2.png'),
      name: 'Hiểu lòng con trẻ',
      shopName: 'Minh Long Book'
    },
    {
      img: require('../assets/trump.png'),
      name: 'Donal Trump Thiên tài lãnh đạo',
      shopName: 'Minh Long Book'
    },
]
  
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 42, backgroundColor: '#1BA9FF', flexDirection: 'row', alignItems: 'center',  }}>
        <TouchableOpacity>
          <Image source={Vector_img} style={{ width: 24, height: 24, marginLeft: 17}}/>
        </TouchableOpacity>
        <Text style={{ width: 40, height: 12, marginLeft: 130, color: '#FFFFFF', fontSize: 18, marginBottom: 10}}>Chat</Text>
        <TouchableOpacity>
          <Image source={Shop_img} style={{ width: 24, height: 24, marginLeft: 130}}/>
        </TouchableOpacity>
      </View>
      <View style ={{ backgroundColor: '#C4C4C4'}}></View>
      <ScrollView>
        <View style={{ marginTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 15, paddingHorizontal: 30, alignItems: 'center'}}>Bạn có thắc mắc với sản phẩm vừa  xem. Đừng ngại chát với shop!</Text>
        </View>
        <FlatList data={DATA} renderItem = {({item}) =>{
          return(
            <View style={{backgroundColor: '#e5e5e5',flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 0.1, marginTop: 10}}>

              <Image style={{ width: '90px', height: '74px', borderColor: 'black' , borderRadius: 5, margin: '10px'}} source={item.img}/>
              <View style={{width: 143}}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{color: 'red'}}><Text style={{color: '#7D5B5B'}} >Shop</Text>  {item.shopName}</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: 'red', width: 88, height: 38, alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                Chat
              </TouchableOpacity>       
            </View>                  
          )
        }}>
        </FlatList>
      </ScrollView>
      <View style={{width: '100%', height: 42, backgroundColor: '#1BA9FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Lab04_b')}}>
          <Image source={Menu_img} style={{ width: 24, height: 24, }}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Home_img} style={{ width: 24, height: 24, }}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Back_img} style={{ width: 24, height: 24, }}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});