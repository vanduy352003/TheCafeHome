import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useDeliveryStore = create((set)=> ({
    deliveryType: 'Delivery',
    takeAwayAddress: {},
    deliveryAddress: {},
    setDeliveryType: (method)=>set({deliveryType: method}),
    setTakeAwayAddress: (address)=>set({takeAwayAddress: address}),
    setDeliveryAddress: (address)=>set({takeDeliveryAddress: address}),
}))

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            user: {},
            addToCart: (productVariant, topping = null, quantity=1) => {
                const cart = get().cart;
                const existingItem = cart.find(item => item.productVariant.id == productVariant.id && item.productVariant.variantName == productVariant.variantName && topping?.toppingId == item.topping?.toppingId);

                if (existingItem) {
                    existingItem.quantity += quantity
                } else {
                    cart.push({productVariant, quantity, topping});
                }
                set({cart});
            },
            clearCart: () => {set({cart:[]})},
            removeFromCart: (productVariant, topping) => {
                const cart = get().cart;
                set({cart:cart.filter(item=> !(item.productVariant.id == productVariant.id && topping?.id == item.topping?.id))})
            },
            updateQuantityCart: (productVariant, topping, quantity=1) => {
                const cart = get().cart;
                const existingItem = cart.find(item => item.productVariant.id == productVariant.id && item.productVariant.variantName == productVariant.variantName && topping?.toppingId == item.topping?.toppingId);

                if (existingItem) {
                    existingItem.quantity = quantity
                } else {
                    cart.push({productVariant, quantity, topping});
                }
                set({cart});
            },
            calculateTotalPrice: () => {
                const cart = get().cart;
                return cart.reduce((total, item)=>{
                    const itemTotal = item.productVariant.price * item.quantity;
                    const toppingPrice = (item.topping? item.topping.price:0)*item.quantity;
                    return total + itemTotal + toppingPrice;
                }, 0);
            },
            getTotalProduct: () => {
                const cart = get().cart;
                return cart.reduce((total, item)=>{
                    const totalItem = item.quantity;
                    return total + totalItem;
                }, 0);
            }
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)
