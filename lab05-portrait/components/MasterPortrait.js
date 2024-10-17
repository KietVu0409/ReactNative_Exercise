import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import btnAdd from '../assets/add.png';
import pinkDonut from '../assets/tasty_donut.png';
import floatingDonut from '../assets/green_donut.png';
import yellowDonut from '../assets/donut_yellow.png';
import redDonut from '../assets/red_donut.png';

export default function MasterPortrait() {
  const [donuts, setDonuts] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const donutImages = {
    donut_yellow: yellowDonut,
    tasty_donut: pinkDonut,
    green_donut: floatingDonut,
    red_donut: redDonut,
  };

  const fetchDonuts = async () => {
    try {
      const response = await fetch('https://6572afdf192318b7db40971d.mockapi.io/Portrait');
      if (!response.ok) {
        throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
      }
      const data = await response.json();
      setDonuts(data);
    } catch (error) {
      console.error('Lỗi Fetch:', error);
    }
  };

  useEffect(() => {
    fetchDonuts();
  }, []);

  const filteredDonuts = donuts.filter((donut) => {
    const matchesSearch = donut.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesButton = selectedButton ? donut.name.toLowerCase().includes(selectedButton.toLowerCase()) : true;
    return matchesSearch && matchesButton;
  });

  return (
    <View style={styles.container}>
      <View style={{ width: 206 }}>
        <Text style={styles.welcomeText}>Welcome, Jala!</Text>
      </View>
      <View style={{ width: 206, marginTop: 5 }}>
        <Text style={styles.choiceText}>Choice your Best food</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search food"
        placeholderTextColor="#C4C4C4"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.buttonGroup}>
        {['Donut', 'Pink Donut', 'Floating'].map((label) => (
          <TouchableOpacity
            key={label}
            style={[
              styles.button,
              selectedButton === label ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => {
              setSelectedButton(label);
              setSearchQuery(label);
            }}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredDonuts}
        renderItem={({ item }) => {
          const imageSource = donutImages[item.image];
          return (
            <View key={item.id} style={styles.viewDonut}>
              <Image source={imageSource} style={styles.image} />
              <View style={styles.donutInfo}>
                <Text style={styles.donutName}>{item.name}</Text>
                <Text style={styles.donutDescription}>{item.description}</Text>
                <View style={styles.viewPriceAdd}>
                  <Text style={styles.donutPrice}>${item.price}</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('DetailPortrait', { donut: { ...item, image: donutImages[item.image] } })}>
                    <Image source={btnAdd} style={styles.btnAdd} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#FFFFFF',
    width: 360,
    height: 640,
    borderWidth: 1,
    borderColor: 'black',
  },
  welcomeText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#000000A6',
  },
  choiceText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
    color: '#000000',
  },
  searchInput: {
    width: 266,
    height: 46,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 3,
    backgroundColor: '#C4C4C41A',
    padding: 5,
    color: '#C4C4C4',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  buttonGroup: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 101,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#F1B000',
  },
  unselectedButton: {
    backgroundColor: '#C4C4C42B',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: 'center',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  viewDonut: {
    width: '100%',
    height: 115,
    borderRadius: 10,
    backgroundColor: '#F4DDDD',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 111,
    height: 101,
    borderRadius: 10,
    marginRight: 10,
  },
  donutInfo: {
    flex: 1,
  },
  donutName: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
    color: '#000000',
  },
  donutDescription: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 17.58,
    lineHeight: 23.44,
    color: '#0000008A',
    marginTop: 5,
  },
  donutPrice: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
    color: '#000000',
  },
  btnAdd: {
    width: 44,
    height: 45,
    justifyContent: 'flex-end',
  },
  viewPriceAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
