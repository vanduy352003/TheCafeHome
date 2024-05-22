import axios from "axios";

export const handleSignUp = async (username, password, navigation) => {
    console.log(username)
    console.log(password)
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/signup?username=${username}&password=${password}`,
        )
        console.log("Respond status: ", response.status);
        navigation.goBack();
    }
    catch (error) {
        console.log("Error status: ", error.status);
    }
}