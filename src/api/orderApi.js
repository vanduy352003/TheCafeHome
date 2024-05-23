import { useCartStore } from "../store/store"


export const createOrder = async (orderDetail) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/api/orders/makeOrder`,orderDetail
        )
        handleOrderItem(response.data)
    } catch(error) {
        return console.log(error)
    }
}

const addOrderItem = async (orderItem) => {
    try {
        const respone = await axios.post(
            `http://localhost:8080/api/orders/addOrderItem`, 
            orderItem
        )
        if (orderItem.topping["toppingId"])
            addOrderItemTopping({orderItem:{orderItemId:respone.data.orderItemId}}, orderItem.topping)
    } catch(error) {
        return console.log(error)
    }
}

const addOrderItemTopping = async (orderItemTopping) => {
    try {
        const respone = await axios.post(
            `http://localhost:8080/api/orders/addOrderItem`, 
            orderItemTopping
        )

    } catch(error) {
        return console.log(error)
    }
}

const handleOrderItem = (order) => {
    const {cart} = useCartStore();
    [...cart].map((item, index) => {
        addOrderItem({order:{orderId:order.OrderId},...item});
    })
}