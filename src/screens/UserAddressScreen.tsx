import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import { useCartStore, useDeliveryStore } from "../store/store";


function UserAddressScreen({navigation}:any): React.JSX.Element {
    const [address, setAddress] = useState("")
    const [receiver, setReceiver] = useState("")
    const [phone, setPhone] = useState("")
    const [isPhoneValid, setIsPhoneValid] = useState(true)
    const {setDeliveryAddress, deliveryAddress} = useDeliveryStore(useMemo(() => (state) => ({
        setDeliveryAddress: state.setDeliveryAddress,
        deliveryAddress: state.deliveryAddress
    }), []))

    useEffect(()=>{
        validatingPhone()
    },[phone])

    const validatingPhone = () => {
        const phoneRegex = /^[0-9]{10}$/
        if (!phoneRegex.test(phone))
            setIsPhoneValid(false)
        else
            setIsPhoneValid(true)
    }

    const handlePressBack = () => {
        navigation.navigate("Cart")
    }

    const handlePressXong = () => {
        console.log(address.trim() === "", receiver.trim() === "", phone.trim() === "", !isPhoneValid)
        if (address.trim() === "" || receiver.trim() === "" || phone.trim() === "" || !isPhoneValid) {
            console.log("vao day")
            return
        }
        setDeliveryAddress(address)
        console.log
        navigation.navigate("Cart")
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
                  <Icon style={styles.icon} name='left'></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thêm địa chỉ mới</Text>
            </View>
            <ScrollView>
                <View style={styles.viewItem}>
                    <Text style={styles.titleText}>Địa chỉ*</Text>
                    <TextInput value={address}
                        onChangeText={text=>setAddress(text)}
                        style={styles.inputText}></TextInput>
                    <Text style={styles.titleText}>Tên người nhận*</Text>
                    <TextInput value={receiver}
                        onChangeText={text=>setReceiver(text)}
                        style={styles.inputText}></TextInput>
                    <Text style={styles.titleText}>Số điện thoại*</Text>
                    <TextInput value={phone}
                        onChangeText={text=>setPhone(text)}
                        style={styles.inputText}></TextInput>
                </View>
            </ScrollView>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.button} onPress={handlePressXong}>
                    <Text style={styles.buttonText}>Xong</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon : {
        fontSize : 25,
        color : '#56a568'
    },
    headerText: {
        textAlign: 'center',
        flex: 1,
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    titleText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    inputText: {
        borderWidth: 0.5,
        borderRadius: 10,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 20,
        color: "#56a568",
        fontWeight: '500',
    },
    bottomSection: {
        backgroundColor: '#56a568',
        height: '10%',
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    headerSection: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    backButton: {
        position: 'absolute',
        left: 10,
        zIndex: 1
    },
    viewItem: {
        backgroundColor: 'white',
        padding: 20
    }
})

export default UserAddressScreen;