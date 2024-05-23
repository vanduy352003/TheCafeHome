import axios from "axios"

const createOrder = async (orderDetail) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/orders/makeOrder`,orderDetail
        )
        return response.data;
    } catch(error) {
        console.log(error)
        throw error;
    }
}

const addOrderItem = async (orderItem) => {
    try {
        const respone = await axios.post(
            `http://localhost:8080/api/orders/addOrderItem`, 
            orderItem
        )
        if (orderItem.topping["toppingId"]) {
            console.log(orderItem.topping)
            await addOrderItemTopping({orderItem:{orderItemId:respone.data.orderItemId}, topping:orderItem.topping})
        } 
    } catch(error) {
        console.log(error)
        throw error;
    }
}

const addOrderItemTopping = async (orderItemTopping) => {
    try {
        const respone = await axios.post(
            `http://localhost:8080/api/orders/addOrderItemTopping`, 
            orderItemTopping
        )
    } catch(error) {
        console.log(error)
        throw error;
    }
}

const handleOrderItem = async (order, cart) => {
    try {
        const promises = cart.map((item) => {
            return addOrderItem({ order: { orderId: order.orderId }, ...item });
        });
        await Promise.all(promises);
    } catch (error) {
        console.error("Error handling order items:", error);
        throw error; 
    }
}

export const handleMakeOrder = async (orderDetail, cart) => {
    try {
        const order = await createOrder(orderDetail);
        await handleOrderItem(order, cart)
    } catch (error) {
        console.error("Failed to create order:", error);
    }
};

export const getUserOrder = async (userId) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/orders/getOrderByUserId?UserId=${userId}`
        )
        return response.data.body
    } catch (error) {
        return console.log(error)
    }
}