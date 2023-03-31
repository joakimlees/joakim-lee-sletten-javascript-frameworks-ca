import { useEffect } from "react";
import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";

export const useCartStore = create(set => ({
  cart: [],
  addToCart: item => {
    set(state => ({ cart: [{ title: item.title }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

// REFACTOR names!!!

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
    console.log(cart);
  }

  function clearCart() {
    clear();
    setValue([]);
    console.log(cart);
  }

  return { addToCart, clearCart, cart };
}
