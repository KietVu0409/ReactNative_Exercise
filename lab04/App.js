import { StyleSheet, View } from "react-native";
import React from 'react';
import Lab04_a from './components/Lab04_a'
import Lab04_b from './components/Lab04_b'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Lab04_a' component={Lab04_a} options={{ headerShown: false }}/>
                <Stack.Screen name='Lab04_b' component={Lab04_b} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
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