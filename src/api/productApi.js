export const getAllProduct = async () => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/product'
        );
        const json = await response.json();
        return json.body
    } catch (error) {
        return console.log(error)
    }
}