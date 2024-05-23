import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { User } from "../model/user"
import { getCurrentUser, handleDeleteUser, handleLogout } from "../api/loginApi"
import Icon from "react-native-vector-icons/AntDesign";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { handleUpdate } from "../api/signupApi";

class ItemProps {
    leftContent: string;
    rightContent: string;
    setRightContent: any;
    secureTextEntry : boolean;
    constructor() {
        this.leftContent = "";
        this.rightContent = "";
        this.secureTextEntry = false;
    }
}
function DetailItem(prop : ItemProps) : React.JSX.Element {
    return (
        <View style = {itemStyles.container}>
            <Text style = {itemStyles.leftText}>{prop.leftContent}</Text>
            <TextInput style = {itemStyles.textBox} value={prop.rightContent} onChangeText={(text) => {prop.setRightContent(text)}} secureTextEntry={prop.secureTextEntry}></TextInput>
        </View>
    )
}
const blackRGB = "#202020"
const itemStyles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        paddingHorizontal : 15,
    },
    left : {
        flex : 1,
        justifyContent : "center",
        alignItems : "flex-start",
        paddingHorizontal : 10,
        paddingVertical : 10,
    },
    right : {
        flex : 1,
        justifyContent : "center",
        alignItems : "flex-end",
        paddingHorizontal : 10,
        paddingVertical : 10
    },
    leftText : {
        fontSize : 12,
        color : blackRGB,
        marginBottom : 5,
        marginTop : 10
    },
    textBox : {
        color : blackRGB,
        borderWidth : 1,
        borderRadius : 5,
        padding : 5,
        fontSize : 15,
    }
})

export default function UserInformationScreen({navigation} : any) : React.JSX.Element {
    
    const user = getCurrentUser()
    const [lastname, setLastname] = useState(user.lastname);
    const [firstname, setFirstname] = useState(user.firstname);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [password, setPassword] = useState("");
    const handleDeleteUserButton = () => {
        handleDeleteUser(user.username, password, navigation);
    }
    const handlePressBack = () => {
        navigation.goBack();
    }
    const handleUpdateButton = () => {
        handleUpdate(user.username, phoneNumber, firstname, lastname, navigation);
    }
    return (
        <ScrollView>
            <View style = {styles.headerContainer}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.icon} name='left'></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thông tin cá nhân</Text>
            </View>
            <DetailItem leftContent="Họ và tên đệm " setRightContent={setLastname} rightContent={lastname} secureTextEntry={false}></DetailItem>
            <DetailItem leftContent="Tên " setRightContent={setFirstname} rightContent={firstname}  secureTextEntry={false}></DetailItem>
            <DetailItem leftContent="Số điện thoại " setRightContent={setPhoneNumber} rightContent={phoneNumber} secureTextEntry={false}></DetailItem>
            <DetailItem leftContent="Nhập mật khẩu " setRightContent={setPassword} rightContent={password} secureTextEntry={true}></DetailItem>
            <View style = {{backgroundColor : "white"}}>
                <TouchableOpacity style = {styles.updateButton} onPress={handleUpdateButton}>
                    <Text style = {styles.logoutButtonContent}> Lưu thay đổi </Text>
                </TouchableOpacity>
            </View>
            <View style = {{backgroundColor : "white"}}>
                <TouchableOpacity style = {styles.logoutButton} onPress={() => {handleLogout(navigation)}}>
                    <Text style = {styles.logoutButtonContent}> Đăng xuất</Text>
                </TouchableOpacity>
            </View>
            <View style = {{backgroundColor : "white"}}>
                <TouchableOpacity style = {styles.deleteButton} onPress={handleDeleteUserButton}>
                    <Text style = {styles.logoutButtonContent}> Xoá tài khoản </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer : {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor : 'white',
    },
    icon : {
        color : blackRGB,
        fontSize : 20,
    },
    headerText: {
      fontSize: 20,
      fontWeight: '500',
      color: blackRGB,
      textAlign: 'center',
      flex: 1,
    },
    logoutButton : {
        width : "90%",
        backgroundColor : '#56a568',
        alignSelf : "center",
        alignItems : "center",
        marginBottom : 10,
        marginTop : 10,
        padding : 10,
        borderRadius : 10
    },
    updateButton : {
        width : "90%",
        backgroundColor : '#56a568',
        alignSelf : "center",
        alignItems : "center",
        marginBottom : 10,
        marginTop : 20,
        padding : 10,
        borderRadius : 10
    },
    logoutButtonContent : {
        color : "white",
        fontSize : 15
    },
    
    deleteButton : {
        width : "90%",
        backgroundColor : "red",
        alignSelf : "center",
        alignItems : "center",
        marginVertical : 10,
        padding : 10,
        borderRadius : 10
    },
})