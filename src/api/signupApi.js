import axios from "axios";

export const handleSignUp = async (username, password, phoneNumber, firstName, lastName, navigation) => {
    console.log(username)
    console.log(password)
    console.log(phoneNumber)
    console.log(firstName)
    console.log(lastName)
    try {
        const response = await axios.post(
            `http://localhost:8080/api/user/signup?username=${username}&password=${password}&phonenumber=${phoneNumber}&firstname=${firstName}&lastname=${lastName}`,
        )
        console.log("Respond status: ", response.status);
        navigation.goBack();
    }
    catch (error) {
        console.log("Error status: ", error.status);
    }
}