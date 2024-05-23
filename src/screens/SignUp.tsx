import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import { handleSignUp } from "../api/signupApi"

function SignUp({navigation} : any) : React.JSX.Element {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const handlePressBack = () => {
        navigation.goBack();
    }
    const handleSignUpButton = () => {
        if(phoneNumber != "" && password != "" && password == retypePassword)
            handleSignUp(username, password, phoneNumber, firstName, lastName, navigation);
        else {
            Alert.alert("Thông tin không hợp lệ");
        }
    }
    return (
        <View style = {{flex:1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressBack}>
                    <Icon style={styles.icon} name="left"></Icon>
                </TouchableOpacity>
                <Text style={styles.headerText}>Tạo tài khoản</Text>
            </View>
            <View style = {styles.container} >
                <TextInput style = {styles.input} value={firstName} onChangeText={(text) => setFirstName(text)} placeholder="Nhập tên của bạn"></TextInput>
                <TextInput style = {styles.input} value={lastName} onChangeText={(text) => setLastName(text)} placeholder="Nhập họ của bạn"></TextInput>
                <TextInput style = {styles.input} value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)}  placeholder="Số điện thoại"></TextInput>
                <TextInput style = {styles.input} value={username} onChangeText={(text) => setUsername(text)} placeholder="Tên đăng nhập"></TextInput>
                <TextInput style = {styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder="Nhập mật khẩu"></TextInput>
                <TextInput style = {styles.input} value={retypePassword} onChangeText={(text) => setRetypePassword(text)} secureTextEntry={true} placeholder="Nhập lại mật khẩu"></TextInput>
                
                <TouchableOpacity style = {styles.button} onPress={handleSignUpButton}>
                    <Text style = {{fontSize : 15, alignSelf : "center", color : "white"}}> Tạo tài khoản </Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor : 'white',
        // justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        flex: 1
    },
    icon : {
        fontSize : 25,
        color : "#56a568"
    },
    input : {
        height : 50,
        borderWidth : 1,
        borderColor : "#C0C0C0",
        borderRadius : 5,
        marginBottom : 10,
        fontSize : 15,
        paddingHorizontal : 10,  
    },
    container : {
        backgroundColor : "white",
        flex : 1,
        paddingHorizontal : 10,
        paddingVertical : 50
    },
    button : {
        justifyContent : "center",
        backgroundColor : "#56a568",
        borderRadius : 5,
        height : 50
    },
})
export default SignUp;