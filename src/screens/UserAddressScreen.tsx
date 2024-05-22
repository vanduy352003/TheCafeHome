import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';


function UserAddressScreen({navigation}:any): React.JSX.Element {
    const [address, setAddress] = useState("")
    const [note, setNote] = useState("")
    const [receiver, setReceiver] = useState("")
    const [phone, setPhone] = useState("")
    const [isPhoneValid, setIsPhoneValid] = useState(true)

    useEffect(()=>{
        validatingPhone()
    },[phone])

    const validatingPhone = () => {
        const phoneRegex = /^[0-9]{10}$/
        if (!phoneRegex.test(phone))
            setIsPhoneValid(false)
    }

    const validatingForm = () => {

    }

    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                  <Icon style={styles.icon} name='left'></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thêm địa chỉ mới</Text>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.titleText}>Địa chỉ*</Text>
                    <TextInput value={address}
                        onChangeText={text=>setAddress(text)}
                        style={styles.inputText}></TextInput>
                    <Text style={styles.titleText}>Ghi chú</Text>
                    <TextInput value={note}
                        onChangeText={text=>setNote(text)}
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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Xong</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    icon : {
        fontSize : 25,
        color : '#56a568'
    },
    headerText: {

    },
    titleText: {

    },
    inputText: {

    },
    button: {

    },
    buttonText: {

    },
    bottomSection: {

    }
})

export default UserAddressScreen;