import axios from "axios";
import { User } from "../model/user";
export let currentUser = new User()
export const handleLogin = async (username, password, navigation) => {
    console.log(username)
    console.log(password)
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/login?username=${username}&password=${password}`
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

// Hàm trả về user
export const getCurrentUser = () => {
    return currentUser;
}