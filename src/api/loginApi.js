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
            currentUser.username = response.data["username"];
            currentUser.userId = response.data["userId"];
            console.log(currentUser)
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

// Hàm trả về user
export const getCurrentUser = () => {
    return currentUser;
}