import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import React from "react";
import Usb_img from '../assets/usb.png';
import Star_img from '../assets/star.png';
import Camera_img from '../assets/camera.png';

export default function Lab02_b() {
    return (
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <Image source={Usb_img} style={styles.usb}/>
                <Text style={styles.textHeader}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View>
                <Text style={styles.viewText}>Cực kỳ hài lòng</Text>
                <Image source={Star_img} style={styles.viewStar}/>
            </View>
            <TouchableOpacity style={styles.viewAddImage}>
                <Image style={styles.camera} source={Camera_img}/>
                <Text style={styles.textAddImage}>Thêm hình ảnh</Text>
            </TouchableOpacity>
            <TextInput style={styles.viewTextInput} placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm" multiline/>
            <TouchableOpacity style={styles.viewBtnSend}>
                <Text style={styles.textBtnSend}>Gửi</Text>
            </TouchableOpacity>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewHeader: {
        flexDirection: 'row'
    }, 
    usb: {
        width: '70px',
        height: '70px',
        top: '13px',
        left: '30px',
        padding: '10.34px, 7.66px, 10.66px, 7.84px'
    },
    textHeader: {
        width: '259px',
        height: '21px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: '700',
        alignContent: 'left',
        top: '19px',
        left: '50px'
    },
    viewText: {
        width: '259px',
        height: '21px',
        top: '100px',
        left: '135px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
    },
    viewStar: {
        width: '290px',
        height: '45px',
        top: '120px',
        left: '50px'
    },
    viewAddImage: {
        width: '293px',
        height: '68px',
        marginTop: '150px',
        left: '50px',
        border: '1px solid #1511EB',
        flexDirection: 'row',
        alignItems: 'center'
    },
    camera: {
        width: '39px',
        height: '32px',
        marginLeft: '50px'
    },
    textAddImage: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 700,
        marginLeft: '20px'
    },
    viewTextInput: {
        width: '293px',
        height: '222px',
        border: '1px solid #C4C4C4',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 700,
        marginLeft: '50px',
        marginTop: '10px',
        padding: '10px'
    },
    viewBtnSend: {
        width: '293px',
        height: '41px',
        backgroundColor: '#0D5DB6',
        border: '1px solid #1511EB',
        marginLeft: '50px',
        marginTop: '20px',
        borderRadius: '10px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtnSend: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 700,
        color: 'white',
    }
});
  