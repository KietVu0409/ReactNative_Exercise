import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen04() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [promotion, setPromotion] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  // Function to handle adding the new product
  const handleAddProduct = () => {
    const newProduct = {
      name,
      price: parseFloat(price),
      promotion,
      image,
      description,
      discount: promotion ? parseInt(promotion.replace('% Off', ''), 10) : 0,
    };

    // Send the new product to the API or local state here
    // For demonstration, we'll just log it
    console.log(newProduct);

    // After adding, navigate back to Screen02
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm Sản Phẩm</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Tên sản phẩm"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Giá"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Khuyến mãi (%)"
        value={promotion}
        onChangeText={setPromotion}
      />
      <TextInput
        style={styles.input}
        placeholder="Link ảnh"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Mô tả"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Thêm Sản Phẩm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  addButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E94141',
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
