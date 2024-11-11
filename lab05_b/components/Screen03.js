import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Screen03({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.discountedPrice || product.price}</Text>
      <Text style={styles.productPromotion}>{product.promotion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10,
  },
  productPromotion: {
    fontSize: 16,
    color: 'red',
  },
});
