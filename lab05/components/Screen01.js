import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

import Email_img from '../assets/email.png';

export default function Screen01({ navigation }) {
  const [email, setEmail] = useState('');

  const goToScreen02 = async () => {
    if (!email) {
      Alert.alert('Thông báo', 'Vui lòng nhập email của bạn.', [{ text: 'OK' }]);
      return;
    }
    
    try {
      const response = await fetch(`https://6572afdf192318b7db40971d.mockapi.io/users?email=${email}`);
      const userData = await response.json();

      if (userData.length > 0) {
        navigation.navigate('Screen02', { userData: userData[0] });
      } else {
        Alert.alert('Thông báo', 'Không có người dùng với email này.', [{ text: 'OK' }]);
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu người dùng', error);
      Alert.alert('Thông báo', 'Có lỗi xảy ra khi kết nối đến máy chủ.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 200 }}>
        <Text style={{ color: '#8353E2', fontFamily: 'Epilogue', fontSize: 24, fontWeight: '700' }}>MANAGE YOUR</Text>
        <Text style={{ color: '#8353E2', fontFamily: 'Epilogue', fontSize: 24, fontWeight: '700', marginTop: 10 }}>TASK</Text>
      </View>
      <View style={{ width: 334, height: 43, marginTop: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'grey', borderRadius: 12, flexDirection: 'row' }}>
        <Image source={Email_img} style={{ width: 20, height: 20, margin: 15 }} />
        <TextInput
          style={{ width: 280, height: 43, borderRadius: 12, padding: 10 }}
          placeholder='Enter your email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <TouchableOpacity style={{ width: 190, height: 44, borderRadius: 12, backgroundColor: '#00BDD6', alignItems: 'center', justifyContent: 'center', marginTop: 80 }} onPress={goToScreen02}>
        <Text style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '400', color: '#FFFFFF' }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
