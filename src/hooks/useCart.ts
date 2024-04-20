import { create } from 'zustand'
import { Product } from '../model/product';

interface BearState {
  bears: number
  increase: (by: number) => void
}
interface CartItem {
  item :Product;
}
interface Cart {
  items: Product[];
}
 
type Actions =  {
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
}

export const useBearStore = create<Cart & Actions>()((set) => ({
 items: [],
 removeItem(id) {
   
 },
 addItem(item) {
   
 },
}))