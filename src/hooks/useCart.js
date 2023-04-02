import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";

export const useCartStore = create(set => ({
  cart: [],
  addToCart: item => {
    set(state => ({ cart: [{ id: item.id, title: item.title, price: item.price, imageUrl: item.imageUrl, rating: item.rating, discountedPrice: item.discountedPrice, description: item.description }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

export function useCart() {
  const add = useCartStore(state => state.addToCart);
  const clear = useCartStore(state => state.clearCart);
  const cart = useCartStore(state => state.cart);
  const [value, setValue] = useLocalStorage();

  if (cart.length < 1 && value) {
    cart.push(...value);
  }

  function addToCart(id) {
    add(id);
    setValue(cart);
  }

  function clearCart() {
    clear();
    setValue([]);
  }

  return { addToCart, clearCart, cart };
}
