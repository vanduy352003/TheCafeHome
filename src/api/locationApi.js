import axios from "axios";

export const getAllLocation = async () => {
    try {
        const response = await axios.get(
            'http://localhost:8080/api/shopLocation'
        );
        return response.data.body
    } catch (error) {
        console.error(error)
        return null;
    }
}