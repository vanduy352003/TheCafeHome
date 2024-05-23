import axios from "axios";
import { User } from "../model/user";
export let currentUser = new User()
import { hashPassword } from "./signupApi";


export const handleLogin = async (username, password, navigation) => {
    let hashedPassword = await hashPassword(password)
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/login?username=${username}&password=${hashedPassword}`
        )
        if(response.status == 200) {
            console.log("Login sucessful");
            console.log(response.data)
            currentUser.username = response.data["username"];
            currentUser.userId = response.data["userId"];
            currentUser.firstname = response.data["firstname"];
            currentUser.lastname = response.data["lastname"];
            currentUser.phoneNumber = response.data["phoneNumber"];
            navigation.push("TabNavigator");
        }
        else {
            console.log("Unexpected error status: ", response.status);
        }
    }
    catch (error) {
        console.log("Error: ", error);
    }
}


export const handleLogout = (navigation) => {
    currentUser = new User();
    navigation.popToTop();
}


export const handleDeleteUser = async (username, password, navigation) => {
    hashedPassword = hashPassword(password)
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/delete?username=${username}&password=${hashedPassword}`
        );
        currentUser = new User();
        navigation.popToTop();
        console.log("Response Status", response.status);
    }
    catch (error) {
        console.log("Error: ", error);
    }
}

// Hàm trả về user
export const getCurrentUser = () => {
    return currentUser;
}