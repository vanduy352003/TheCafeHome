import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { handleLogin } from "../api/loginApi";
import Icon from "react-native-vector-icons/AntDesign"

function Login({navigation} : any) : React.JSX.Element {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [passWord, setPassword] = useState("");
    const tryLogin = () => {
        handleLogin(phoneNumber, passWord, navigation);
    }
    const handlePressBack = () => {
        navigation.goBack();
    }
    const handleSignUp = () => {
        navigation.push("SignUp")
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.loginContainer}>
                {/* <TouchableOpacity onPress={handlePressBack}>
                    <Icon style = {styles.closeIcon} name = "closecircle"> </Icon>
                </TouchableOpacity> */}
                <Text style = {{fontSize : 20, alignSelf : "center", marginBottom : 20}}>
                    Đăng nhập
                </Text>
                <TextInput placeholder="Số điện thoại" style = {styles.phonenumberInput} value={phoneNumber} onChangeText={(text : string) => {setPhoneNumber(text)}}>
                </TextInput>
                <TextInput placeholder="Mật khẩu" style = {styles.passwordInput} value={passWord} onChangeText={(text : string) => {setPassword(text)}}>
                    
                </TextInput>
                <TouchableOpacity style = {styles.button} onPress={tryLogin}>
                    <Text style = {{fontSize : 15, alignSelf : "center", color : "white"}}> Đăng nhập </Text>
                </TouchableOpacity>
                <Text style={{marginVertical : 15, fontSize : 15, alignSelf : "center"}}>
                    HOẶC
                </Text>
                <TouchableOpacity style = {styles.button} onPress={handleSignUp}>
                    <Text style = {{fontSize : 15, alignSelf : "center", color : "white"}}> Đăng ký </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        flex : 1,
    },
    closeIcon : {
        marginBottom : 10,
        alignSelf : "flex-end",
        fontSize : 20,
        color : "#A0A0A0"
    },
    loginContainer : {
        borderWidth : 2,
        borderRadius : 10,
        width : "90%",
        justifyContent : "center",
        alignSelf : "center",
        verticalAlign : "middle",
        backgroundColor : "white",
        padding : 20
    },
    phonenumberInput : {
        height : 50,
        borderWidth : 1,
        borderColor : "#C0C0C0",
        borderRadius : 5,
        marginBottom : 10,
        fontSize : 15,
        paddingHorizontal : 10
    },
    passwordInput : {
        height : 50,
        borderWidth : 1,
        borderColor : "#C0C0C0",
        borderRadius : 5,
        marginBottom : 20,
        fontSize : 15,
        paddingHorizontal : 10
    },
    button : {
        justifyContent : "center",
        backgroundColor : "#56a568",
        borderRadius : 5,
        height : 50
    },
    
})
export default Login;