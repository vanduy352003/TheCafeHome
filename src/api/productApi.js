import axios from "axios";

export const getAllProduct = async () => {
    try {
        const response = await axios.get(
            'http://localhost:8080/api/product'
        );
        return response.data.body
    } catch (error) {
        return console.log(error)
    }
}