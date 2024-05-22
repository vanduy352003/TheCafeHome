import axios from "axios";

export const getAllFavoriteByUserId = async (userId) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/favorite/getFavoriteByUser?UserId=${userId}`
        );
        return response.data.body
    } catch (error) {
        return console.log(error)
    }
}

export const addFavoriteForUserId = async (productId, userId) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/favorite/addFavoriteForUser?ProductId=${productId}&UserId=${userId}`
        );
        return response.data.body
    } catch (error) {
        return console.log(error)
    }
}

export const deleteFavoriteById = async (favoriteId) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/favorite/deleteFavorite?favoriteId=${favoriteId}`
        );
        return response.data.body
    } catch (error) {
        return console.log(error)
    }
}

