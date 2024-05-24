import axios from "axios";
import { currentUser } from "./loginApi";
import CryptoJS from 'crypto-js';

export const hashPassword = (password) => {
  const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  return hash;
};

export const handleSignUp = async (username, password, phoneNumber, firstName, lastName, navigation) => {
    let hashedPassword = await hashPassword(password)
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/signup?username=${username}&password=${hashedPassword}&phonenumber=${phoneNumber}&firstname=${firstName}&lastname=${lastName}`,
        )
        console.log("Respond status: ", response.status);
        navigation.goBack();
    }
    catch (error) {
        console.log("Error status: ", error.status);
        
        Alert.alert("Thông tin không hợp lệ ")
    }
}


export const handleUpdate = async (username, phoneNumber, firstName, lastName, navigation) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/update?username=${username}&phonenumber=${phoneNumber}&firstname=${firstName}&lastname=${lastName}`,
        )
        console.log("Respond status: ", response.status);
        navigation.goBack();
        currentUser.phoneNumber = phoneNumber;
        currentUser.lastname = lastName;
        currentUser.firstname = firstName;
    }
    catch (error) {
        console.log("Error status: ", error.status);
        Alert.alert("Cập nhật thất bại")
    }
} 