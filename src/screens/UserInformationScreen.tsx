import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { User } from "../model/user"
import { getCurrentUser, handleLogout } from "../api/loginApi"
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useCartStore } from "../store/store";

class ItemProps {
    leftContent: string;
    rightContent: string;
    constructor() {
        this.leftContent = "";
        this.rightContent = "";
    }
}
function DetailItem(prop : ItemProps) : React.JSX.Element {
    return (
        <View style = {itemStyles.container}>
            <View style = {itemStyles.left}>
                <Text style = {itemStyles.leftText}>{prop.leftContent}</Text>
            </View>
            <View style = {itemStyles.right}>
                <Text style = {itemStyles.rightText}>{prop.rightContent}</Text>
            </View>
        </View>
    )
}
const blackRGB = "#202020"
const itemStyles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        flexDirection : "row",
        alignItems : "center",
        borderBottomWidth : 1
    },
    left : {
        flex : 1,
        justifyContent : "center",
        alignItems : "flex-start",
        paddingHorizontal : 10,
        paddingVertical : 10
    },
    right : {
        flex : 1,
        justifyContent : "center",
        alignItems : "flex-end",
        paddingHorizontal : 10,
        paddingVertical : 10
    },
    leftText : {
        fontSize : 18,
        color : blackRGB,
    },
    rightText : {
        fontSize : 18,
        color : blackRGB,
    }
})

export default function UserInformationScreen({navigation} : any) : React.JSX.Element {
    const {clearCart} = useCartStore();
    const handlePressBack = () => {
        navigation.goBack();
    }
    
    const user = getCurrentUser()
    return (
        <ScrollView>
            <View style = {styles.headerContainer}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.icon} name='left'></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Thông tin cá nhân</Text>
            </View>
            <DetailItem leftContent="Họ và tên đệm " rightContent={user.lastname}></DetailItem>
            <DetailItem leftContent="Tên " rightContent={user.firstname}></DetailItem>
            <DetailItem leftContent="Số điện thoại " rightContent={user.phoneNumber}></DetailItem>
            <View>
                <TouchableOpacity style = {styles.logoutButton} onPress={() => {handleLogout(navigation);clearCart()}}>
                    <Text style = {styles.logoutButtonContent}> Đăng xuất</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.deleteButton}>
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
        marginVertical : 10,
        padding : 10,
        borderRadius : 10
    },
    logoutButtonContent : {
        color : "white",
        fontSize : 18
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