import { StyleSheet, View } from "react-native";
import React, {useState, createContext} from 'react';
import Lab3_screen1 from './components/Lab3_screen1';
import Lab3_screen2 from './components/Lab3_screen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Blue from './assets/lab3_blue.png';

const Stack = createNativeStackNavigator();
export let MyContext = createContext();

export default function App() {
  let [img, setImg] = useState(Blue)
  return (
    <MyContext.Provider value={{ img , setImg}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Lab3_screen1} options={{ headerShown: false }}/>
          <Stack.Screen name='PickColor' component={Lab3_screen2} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
