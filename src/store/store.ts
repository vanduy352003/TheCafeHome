import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useDeliveryStore = create((set)=> ({
    deliveryType: '',
    setDeliveryType: (method)=>set({deliveryType: method}),
}))