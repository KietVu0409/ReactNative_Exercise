import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen02() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://6715e63e33bc2bfe40bb786c.mockapi.io/api/vuthekiet/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);  // Initially show all products
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Function to filter products based on category
  const filterProducts = (category) => {
    setCategory(category);
    if (category === 'All') {
      // Show all products if 'All' is selected
      setFilteredProducts(products);
    } else if (category === 'Roadbike') {
      // Filter products with 'bike' in their name (case insensitive)
      setFilteredProducts(products.filter(product => product.name.toLowerCase().includes('bike')));
    } else if (category === 'Mountain') {
      // Filter products with 'mountain' in their name (case insensitive)
      setFilteredProducts(products.filter(product => product.name.toLowerCase().includes('mountain')));
    }
  };

  // Function to render each product
  const renderProduct = ({ item }) => {
    // Calculate the discounted price
    const discountedPrice = item.price - (item.price * item.discount / 100);
    const hasDiscount = item.discount > 0;  // Check if there's a discount

    return (
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => navigation.navigate('Screen03', { product: item })}  // Navigate to Screen03 with selected product
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          {/* Display original price and discounted price if applicable */}
          <Text style={styles.productPrice}>
            {hasDiscount && (
              <Text style={styles.originalPrice}>${item.price.toFixed(2)} </Text>
            )}
            <Text style={{ color: hasDiscount ? 'green' : 'black' }}>${discountedPrice.toFixed(2)}</Text>
          </Text>
          {hasDiscount && <Text style={styles.discountText}>{item.promotion}</Text>}  {/* Display promotion text */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 255, height: 29 }}>
        <Text style={styles.paragraph}>The world’s Best Bike</Text>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => filterProducts('All')}  // Show all products
        >
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => filterProducts('Roadbike')}  // Show only products with 'bike' in the name
        >
          <Text style={styles.categoryText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => filterProducts('Mountain')}  // Show only products with 'mountain' in the name
        >
          <Text style={styles.categoryText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}  // Display filtered products
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />

      {/* Button to navigate to Screen04 to add a new product */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Screen04')}
      >
        <Text style={styles.addButtonText}>Thêm Sản Phẩm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 24,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderColor: 'black',
    flex: 1,
  },
  paragraph: {
    fontSize: 25,
    lineHeight: 28.73,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    color: '#E94141',
  },
  categoryContainer: {
    width: 320,
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryButton: {
    width: 99,
    height: 32,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E9414187',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 20,
    fontFamily: 'Voltaire',
    fontWeight: '400',
    color: '#BEB6B6',
  },
  productList: {
    paddingBottom: 20,
    width: 320,
  },
  productContainer: {
    padding: 10,
    marginBottom: 10,
    width: '50%',
    paddingHorizontal: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',  // Strike through the original price
    color: 'gray',
  },
  discountText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
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
