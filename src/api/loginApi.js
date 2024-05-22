import axios from "axios";

export const handleLogin = async (username, password, navigation) => {
    console.log(username)
    console.log(password)
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/login?username=${username}&password=${password}`
        )
        if(response.status == 200) {
            console.log("Login sucessful")
            navigation.goBack();
        }
        else {
            console.log("Unexpected error status: ", response.status);
        }
    }
    catch (error) {
        console.log("Error: ", error);
    }
}