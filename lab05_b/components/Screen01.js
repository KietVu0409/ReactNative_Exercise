import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen01() {

  const navigation = useNavigation(); 

  const handlePress = () => {
    navigation.navigate('Screen02'); 
  };

  return (
    <View style={styles.container}>
      <View style={{width: 351, height: 87}}>
        <Text style={styles.paragraph}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={{width: 351, height: 330, backgroundColor: '#E941411A', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={{width: 351, height: 61, marginTop: 20}}>
        <Text style={styles.paragraph}>
          POWER BIKE 
        </Text>
        <Text style={styles.paragraph}>
          SHOP 
        </Text>
      </View>
      <TouchableOpacity style={{width: 340, height: 61, backgroundColor: '#E94141', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 20}} onPress={handlePress}> <Text style={{fontSize: 27,
    lineHeight: 27,
    fontWeight: 400 ,
    textAlign: 'center',
    fontFamily: 'VT323', color: '#FEFEFE'}}>Get Started</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    width: 375,
    height: 812,
    borderRadius: 10,
    border: '1px solid black',
    flex: 1,
  },
  paragraph: {
    fontSize: 24,
    lineHeight: 26,
    fontWeight: 400 ,
    textAlign: 'center',
    fontFamily: 'VT323',
  },
  logo: {
    height: 180,
    width: 200,
  }
});
