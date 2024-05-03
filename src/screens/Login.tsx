import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"

function Login() : React.JSX.Element {
    return (
        <View style = {styles.container}>
            <View style = {styles.loginContainer}>
                <TouchableOpacity>
                    <Icon style = {styles.closeIcon} name = "closecircle"> </Icon>
                </TouchableOpacity>
                <Text style = {{fontSize : 20, alignSelf : "center", marginBottom : 20}}>
                    Đăng nhập
                </Text>
                <TextInput placeholder="Số điện thoại" style = {styles.phonenumberInput}>

                </TextInput>
                <TextInput placeholder="Mật khẩu" style = {styles.passwordInput}>
                    
                </TextInput>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {{fontSize : 15, alignSelf : "center", color : "white"}}> Đăng nhập </Text>
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
        backgroundColor : "orange",
        borderRadius : 5,
        height : 50
    }
})
export default Login;