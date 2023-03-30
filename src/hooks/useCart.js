import { useEffect } from "react";
import { create } from "zustand";
import useLocalStorage from "./useLocalStorage";

export const useCartStore = create(set => ({
  cart: [],

  getLocalStorage: value => {
    const newCart = localStorage.getItem(value);

    set(state => ({ cart: newCart }));
  },

  addToCart: item => {
    set(state => ({ cart: [{ id: item.id, title: item.title }, ...state.cart] }));
  },
  clearCart: () => set({ cart: [] }),
}));

export function useCart() {
  const add = useCartStore(state => state.addToCart);
  const clear = useCartStore(state => state.clearCart);
  const cart = useCartStore(state => state.cart);

  const [value, setValue] = useLocalStorage();

  useEffect(() => {
    setValue(cart);
  }, [cart]);

  function addToCart(id) {
    add(id);
    console.log(cart);
  }

  function clearCart() {
    clear();
  }

  return { addToCart, clearCart };
}
