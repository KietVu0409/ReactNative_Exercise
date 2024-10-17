import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import vector from '../assets/vector.png'

export default function DetailPortrait({ route, navigation }) {
  const { donut } = route.params;
  const [timeLeft, setTimeLeft] = useState(30);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(donut.price);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 60000); 

    return () => clearInterval(timer);
  }, []);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice((count - 1) * donut.price);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
    setTotalPrice((count + 1) * donut.price);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image source={donut.image} style={styles.image}/>
      </View>
      <Text style={styles.donutName}>{donut.name}</Text>
      <View style={styles.viewDesPrice}>
        <Text style={styles.donutDescription}>{donut.description}</Text>
        <Text style={styles.donutPrice}>${totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.viewAction}>
        <View style={styles.viewDe}>
          <View style={styles.viewTime}>
            <View>
              <Image source={vector} style={styles.viewIcon}/>
            </View>
            <View>
              <Text style={styles.donutDescription}>Delivery in</Text>
            </View>
          </View>
          <View>
            <Text style={styles.donutName}>{timeLeft} min</Text>
          </View>
        </View>
        <View style={styles.viewNumber}>
          <TouchableOpacity style={styles.action} onPress={decreaseCount}>-</TouchableOpacity>
          <View style={styles.count}>{count}</View>
          <TouchableOpacity style={styles.action} onPress={increaseCount}>+</TouchableOpacity>
        </View>
      </View>
      <Text style={styles.donutName}>Restaurants info</Text>
      <Text style={styles.donutDescription}>
Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Add To Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 14,
    width: 360,
    height: 640,
    border: '1px solid black'
  },
  viewImg: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 272,
    height: 278,
    borderRadius: 10,
  },
  donutName: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 15,
    lineHeight: 23.44,
  },
  viewDesPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  donutDescription: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#0000008A',
    lineHeight: 17.58,
  },
  donutPrice: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
    lineHeight: 23.44,
  },
  viewDe: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  viewTime: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  viewNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  action: {
    width: 21,
    height: 21,
    border: '1px solid #00000033',
    backgroundColor: '#F1B000',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    width: 16,
    height: 24,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
    marginLeft: 5,
    marginRight: 5
  },
  viewBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 316,
    height: 58,
    backgroundColor: '#F1B000',
    padding: 10,
    borderRadius: 5,
    border: '1px solid #00000033',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
    color: '#FFFDFD',
    lineHeight: 29.3,
  },
});
