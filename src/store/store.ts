import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useDeliveryStore = create((set)=> ({
    deliveryType: 'Delivery',
    setDeliveryType: (method)=>set({deliveryType: method}),
}))

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            user: {},
            addToCart: (productVariant, quantity=1) => {
                const cart = get().cart;
                const existingItem = cart.find(item => item.productVariant.id == productVariant.id);

                if (existingItem) {
                    existingItem.quantity += quantity
                } else {
                    cart.push({productVariant, quantity, toppings: []});
                }
                set({cart});
            },
            clearCart: () => {set({cart:[]})}
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)