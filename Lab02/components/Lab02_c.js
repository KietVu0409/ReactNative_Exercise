import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import React from "react";

export default function Lab02_c() {
    return (
        <View style={styles.container}>
            <View style={styles.viewTextTitle}> 
                <Text style={styles.textTitle}>PASSWORD</Text>
                <Text style={styles.textTitle}>GENERATOR</Text>
            </View>
            <TextInput style={styles.viewTextInput}/>
            <View style={styles.viewMenu}>
                <Text style={styles.textMenu}>Password length</Text>
                <TextInput style={styles.textInputMenu}/>
            </View>
            <View style={styles.viewMenu}>
                <Text style={styles.textMenu1}>Include lower case letters</Text>
                <TextInput style={styles.textInputMenu1}/>
            </View>
            <View style={styles.viewMenu}>
                <Text style={styles.textMenu1}>Include upcase letters</Text>
                <TextInput style={styles.textInputMenu1}/>
            </View>
            <View style={styles.viewMenu}>
                <Text style={styles.textMenu1}>Include number</Text>
                <TextInput style={styles.textInputMenu1}/>
            </View>
            <View style={styles.viewMenu}>
                <Text style={styles.textMenu1}>Include special symbol</Text>
                <TextInput style={styles.textInputMenu1}/>
            </View>
            <TouchableOpacity style={styles.viewBtn}>
                <Text style={styles.textBtn}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#23235B',
    },
    viewTextTitle: {
        width: '180px',
        height: '64px',
        marginTop: '59px',
        alignSelf: 'center'
    },
    textTitle: {
        fontFamily: 'Roboto',
        fontSize: '25px', 
        fontWeight: 700, 
        color: 'white',
        alignSelf: 'center'
    },
    viewTextInput: {
        width: '297px',
        height: '55px',
        marginTop: '50px',
        alignSelf: 'center',
        backgroundColor: '#151537',
        color: 'white',
        padding: '10px'
    },
    viewMenu: {
        flexDirection: 'row',
        marginLeft: '45px',
        marginTop: '30px',
    },
    textMenu: {
        width: '150px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '20px', 
        fontWeight: 700, 
        color: 'white',
        alignSelf: 'center'
    },
    textInputMenu: {
        width: '118px',
        height: '33px',
        backgroundColor: 'white',
        marginLeft: '30px',
        padding: '10px'
    },
    textMenu1: {
        width: '253px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '20px', 
        fontWeight: 700, 
        color: 'white',
        alignSelf: 'center'
    },
    textInputMenu1: {
        width: '25px',
        height: '25px',
        backgroundColor: 'white',
        marginLeft: '20px',
        padding: '10px'
    },
    viewBtn: {
        width: '269px',
        height: '55px',
        marginTop: '50px',
        backgroundColor: '#3B3B98', 
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        fontFamily: 'Roboto',
        fontSize: '18px', 
        fontWeight: 700, 
        color: 'white',
    }
});
  