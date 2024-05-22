import axios from "axios";

export const getAllCategory = async () => {
    try {
        const response = await axios.get(
            'http://localhost:8080/api/category'
        );
        return response.data.body
    } catch (error) {
        console.error(error)
        return null;
    }
}